'use client';

import SudokuGrid from '@/components/SudokuGrid';

export default function SudokuPage() {
  return (
    <main>
      <h1 style={{ color: '#fef9c3', textAlign: 'center', marginBottom: '1rem' }}>🌿 Sudoku Game</h1>
      <SudokuGrid />
    </main>
  );
}