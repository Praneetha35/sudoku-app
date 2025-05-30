# 🧩 Sudoku Game – Next.js + TypeScript + Tailwind CSS

🔗 Live Demo: https://sudoku-app-ten-tan.vercel.app/

A fully functional and styled Sudoku game built with **Next.js** and **TypeScript** without relying on any Sudoku generation or validation libraries. Tailwind CSS is used for responsive styling, and Jest is used for writing basic unit tests.

Interview Challenge – Completed in 2 hours

# Thought process

I approached this by first thinking about how I would solve this manually or in a LeetCode problem. Basically tracking values, validating them against the solution and checking for conflicts.

Instead of relying on any library, I created logic to compare each user entry with the correct value from the solution board. I made the board editable only where needed and used simple checks to validate winning conditions.

The tile colors were done by alternating based on (row + col) % 2 and correctness feedback was added based on whether the entered value matched the solution.

My goal was to keep the logic clean, the UI intuitive and everything fully testable and all within the 2-hour limit.
---

## Features

- Sudoku board with 9x9 grid
- Input validation and conflict highlighting
- Green and yellow alternating tile color design
- TypeScript for type safety and structure
- Jest tests for game logic
- No external Sudoku libraries used and everything built from scratch
- Clean and responsive UI using Tailwind CSS

---

## Tech Stack

- **Frontend:** Next.js (React + TypeScript)
- **Styling:** Tailwind CSS
- **Testing:** Jest

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Praneetha35/sudoku-app.git
cd sudoku-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm run dev
```

### 4. Run Tests

```bash
npm run test
```

## Functionality Covered

- Manual Sudoku board rendering

- Cell input and real-time validation

- Unique styling using green-yellow tile alternation

- Test cases to verify:

    - Board generation

    - Value placement rules

    - Conflict detection (row, column, box)

## Notes

- No third-party Sudoku solving or generating libraries used.

- Sudoku logic implemented manually in TypeScript.

- Design focused on readability and usability.

- Built with interview time constraint in mind (2 hours).

## I used an LLM to support me with:

- Generating a reference image for the board’s green-yellow tile design

- Structuring and refining this README

- Small Tailwind styling suggestions