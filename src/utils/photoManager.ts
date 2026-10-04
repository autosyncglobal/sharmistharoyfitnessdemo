import { useState, useEffect, useCallback } from 'react';

// IndexedDB database and store configuration for large uncompressed photos
const DB_NAME = 'coach_sharmistha_media_db';
const STORE_NAME = 'coach_photos';
const DB_VERSION = 1;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (!('indexedDB' in window)) {
      reject(new Error('IndexedDB not supported'));
      return;
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (e) => {
      const db = (e.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getStoredPhoto(key: string): Promise<string | null> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(key);
      req.onsuccess = () => {
        resolve(req.result || null);
      };
      req.onerror = () => resolve(null);
    });
  } catch {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }
}

async function setStoredPhoto(key: string, dataUrl: string): Promise<void> {
  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(dataUrl, key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch {
    // Fallback to localStorage if IndexedDB is unavailable
    try {
      localStorage.setItem(key, dataUrl);
    } catch (e) {
      console.warn('Storage quota exceeded, keeping in-memory only', e);
    }
  }
}

async function removeStoredPhoto(key: string): Promise<void> {
  try {
    const db = await openDB();
    await new Promise<void>((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.delete(key);
      req.onsuccess = () => resolve();
      req.onerror = () => resolve();
    });
  } catch {
    // Ignore
  }
  try {
    localStorage.removeItem(key);
  } catch {
    // Ignore
  }
}

export function useCoachPhoto(type: 'hero' | 'about', defaultImage: string) {
  const key = `coach_photo_${type}_v3`;
  const [photoUrl, setPhotoUrl] = useState<string>(defaultImage);
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadPhoto = useCallback(async () => {
    try {
      const saved = await getStoredPhoto(key);
      if (saved) {
        setPhotoUrl(saved);
        setIsCustom(true);
      } else {
        setPhotoUrl(defaultImage);
        setIsCustom(false);
      }
    } catch {
      setPhotoUrl(defaultImage);
      setIsCustom(false);
    } finally {
      setIsLoading(false);
    }
  }, [key, defaultImage]);

  useEffect(() => {
    loadPhoto();

    const handleUpdate = () => {
      loadPhoto();
    };

    window.addEventListener('storage', handleUpdate);
    window.addEventListener('coach_photo_updated', handleUpdate);
    return () => {
      window.removeEventListener('storage', handleUpdate);
      window.removeEventListener('coach_photo_updated', handleUpdate);
    };
  }, [loadPhoto]);

  const savePhoto = async (file: File) => {
    return new Promise<void>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const result = e.target?.result as string;
        if (result) {
          try {
            await setStoredPhoto(key, result);
            setPhotoUrl(result);
            setIsCustom(true);
            window.dispatchEvent(new Event('coach_photo_updated'));
            resolve();
          } catch (err) {
            reject(err);
          }
        }
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const resetPhoto = async () => {
    try {
      await removeStoredPhoto(key);
      setPhotoUrl(defaultImage);
      setIsCustom(false);
      window.dispatchEvent(new Event('coach_photo_updated'));
    } catch {
      // Ignore
    }
  };

  return { photoUrl, savePhoto, resetPhoto, isCustom, isLoading };
}
