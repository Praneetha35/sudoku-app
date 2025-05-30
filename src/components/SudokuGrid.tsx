"use client";

import Cell from "./Cell";
import { useState } from "react";
import { initialBoard, solutionBoard } from "@/lib/sudoku";

export default function SudokuGrid() {
  const [board, setBoard] = useState(initialBoard);
  const [won, setWon] = useState(false);

  const isEditable = (row: number, col: number) =>
    initialBoard[row][col] === null;

  const handleChange = (row: number, col: number, val: string) => {
    const newBoard = board.map((r) => [...r]);
    newBoard[row][col] = val === "" ? null : parseInt(val);
    setBoard(newBoard);

    const isCorrect = newBoard.every((r, rIdx) =>
      r.every((v, cIdx) => v === solutionBoard[rIdx][cIdx])
    );
    setWon(isCorrect);
  };

  const resetBoard = () => {
    setBoard(initialBoard);
    setWon(false);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="grid">
        {board.map((row, rIdx) =>
          row.map((cell, cIdx) => (
            <Cell
              key={`${rIdx}-${cIdx}`}
              row={rIdx}
              col={cIdx}
              value={cell}
              solution={solutionBoard[rIdx][cIdx]}
              editable={isEditable(rIdx, cIdx)}
              onChange={handleChange}
            />
          ))
        )}
      </div>
      <div className="mt-6">
        <button
          onClick={resetBoard}
          className="bg-yellow-400 text-black px-5 py-2 rounded-xl shadow hover:bg-yellow-500 transition duration-200"
        >
          🔄 Restart Game
        </button>
      </div>
      {won && (
        <div className="modal">
          <div className="modal-content">Hurrayyyyyyyy! You Won the Game!</div>
        </div>
      )}
    </div>
  );
}
