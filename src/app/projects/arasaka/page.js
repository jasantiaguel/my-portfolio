"use client";

import { useRouter } from 'next/navigation';
import styles from './styles.module.css';

export default function ArasakaPage() {
  const router = useRouter(); // ✅ Import and use the router

  return (
    <div className={styles.container}>
      <h1>Arasaka Project</h1>
      <button
        onClick={() => router.push("/")} // ✅ Go back to the previous page
        className="mt-6 px-4 py-2 bg-gray-800 text-white rounded"
      >
        ⬅ Go Back
      </button>
    </div>
  );
}