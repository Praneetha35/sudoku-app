import React from 'react';

type CellProps = {
  value: number | null;
  solution: number;
  editable: boolean;
  row: number;
  col: number;
  onChange: (row: number, col: number, value: string) => void;
};

export default function Cell({ value, solution, editable, row, col, onChange }: CellProps) {
  const tileColor = (row + col) % 2 === 0 ? 'greenTile' : 'yellowTile';
  let correctness = '';
  if (editable && value !== null) {
    correctness = value === solution ? 'correct' : 'incorrect';
  }

  return (
    <input
      className={`cell ${tileColor} ${editable ? 'editable' : 'readonly'} ${correctness}`}
      type="text"
      maxLength={1}
      value={value ?? ''}
      onChange={(e) => onChange(row, col, e.target.value)}
      readOnly={!editable}
    />
  );
}
