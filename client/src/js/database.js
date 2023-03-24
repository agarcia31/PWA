import { openDB } from 'idb';
import { offlineFallback, warmStrategyCache } from 'workbox-recipes';
import { CacheFirst } from 'workbox-strategies';
import { registerRoute } from 'workbox-routing';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => {
  const db = await  openDB('jate', 1);
  const tx = db.transaction('jate', 'readwrite');
  tx.store.add({ content });
  await tx.done;
  console.log('added content to jate database');
};

export const getDb = async () => {
  const db = await  openDB('jate', 1);
  const tx = db.transaction('jate', 'readonly');
  const content = await tx.store.getAll();
  console.log('retrieved content from jate database');
  return content;
};

initdb();
