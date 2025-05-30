import { validateBoard } from '../lib/validateBoard';

describe('validateBoard', () => {
  it('returns true for a valid 9x9 board', () => {
    const board = Array.from({ length: 9 }, () => Array(9).fill(5));
    expect(validateBoard(board)).toBe(true);
  });

  it('returns false for board with less than 9 rows', () => {
    const board = Array.from({ length: 8 }, () => Array(9).fill(1));
    expect(validateBoard(board)).toBe(false);
  });

  it('returns false for board with row having less than 9 cells', () => {
    const board = Array.from({ length: 9 }, () => Array(9).fill(1));
    board[0] = [1, 2];
    expect(validateBoard(board)).toBe(false);
  });

  it('returns false if any cell is null', () => {
    const board = Array.from({ length: 9 }, () => Array(9).fill(1));
    board[1][1] = null as any;
    expect(validateBoard(board)).toBe(false);
  });

  it('returns false if any value is outside 1–9', () => {
    const board = Array.from({ length: 9 }, () => Array(9).fill(1));
    board[2][2] = 10;
    expect(validateBoard(board)).toBe(false);
  });
});
