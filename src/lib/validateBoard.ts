export function validateBoard(board: number[][]): boolean {
  if (board.length !== 9) return false;
  for (const row of board) {
    if (row.length !== 9) return false;
    for (const cell of row) {
      if (typeof cell !== 'number' || cell < 1 || cell > 9) return false;
    }
  }
  return true;
}
