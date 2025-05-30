'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="landing-container">
      <h1 className="landing-title">🧩 Ready to Play Sudoku?</h1>
      <button onClick={() => router.push('/sudoku')} className="play-button">
        Let's Play!
      </button>
    </div>
  );
}