export enum Move {
  Paper,
  Rock,
  Scissors,
}
export enum Outcome {
  PlayerWins,
  PlayerLoses,
  Tie,
}
interface RockPaperScissors {
  play(playerMove: Move, opponentMove: Move): Outcome;
}
export function createRockPaperScissors(): RockPaperScissors {
  return {
    play(playerMove: Move, opponentMove: Move) {
      if (opponentMove === Move.Scissors) {
        return Outcome.PlayerLoses;
      }
      return Outcome.PlayerWins;
    },
  };
}
