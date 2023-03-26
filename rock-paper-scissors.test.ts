// The 3 laws of TDD:
//   1. You are not allowed to write any production code unless it is to make a failing unit test pass.
//   2. You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures are failures.
//   3. You are not allowed to write any more production code than is sufficient to pass the one failing unit test.
// Red -> Green -> Reflect -> Refactor
// Fake It Green Bar Pattern

import { Move, Outcome, createRockPaperScissors } from "./rock-paper-scissors";

// Fake It Green Bar Pattern
describe("rock-paper-scissors", () => {
  test("given player move paper and opponent move rock should return player wins", () => {
    // Arrange
    const sut = createRockPaperScissors();
    // Act
    const actual = sut.play(Move.Paper, Move.Rock);
    // Assert
    expect(actual).toBe(Outcome.PlayerWins);
  });

  test("given player move paper and opponent move scissors should return player loses", () => {
    // Arrange
    const sut = createRockPaperScissors();
    // Act
    const actual = sut.play(Move.Paper, Move.Scissors);
    // Assert
    expect(actual).toBe(Outcome.PlayerLoses);
  });
});
