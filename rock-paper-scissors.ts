export enum Move {
  Paper = "Paper",
  Rock = "Rock",
  Scissors = "Scissors",
}
export enum Outcome {
  PlayerWins = "Player wins",
  PlayerLoses = "Player loses",
  Tie = "Tie",
}
interface RockPaperScissors {
  play(playerMove: Move, opponentMove: Move): Outcome;
}
export function createRockPaperScissors(): RockPaperScissors {
  const scenarios = new Array(
    {
      playerMove: Move.Scissors,
      opponentMove: Move.Paper,
      outcome: Outcome.PlayerWins,
    },
    {
      playerMove: Move.Scissors,
      opponentMove: Move.Rock,
      outcome: Outcome.PlayerLoses,
    },
    {
      playerMove: Move.Rock,
      opponentMove: Move.Scissors,
      outcome: Outcome.PlayerWins,
    },
    {
      playerMove: Move.Rock,
      opponentMove: Move.Paper,
      outcome: Outcome.PlayerLoses,
    },
    {
      playerMove: Move.Paper,
      opponentMove: Move.Rock,
      outcome: Outcome.PlayerWins,
    },
    {
      playerMove: Move.Paper,
      opponentMove: Move.Scissors,
      outcome: Outcome.PlayerLoses,
    }
  );
  return {
    play(playerMove: Move, opponentMove: Move) {
      const result = scenarios.find(
        (scenario) =>
          scenario.playerMove === playerMove &&
          scenario.opponentMove === opponentMove
      );

      return result ? result.outcome : Outcome.Tie;
    },
  };
}
