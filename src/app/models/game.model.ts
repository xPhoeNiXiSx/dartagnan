import { Player } from "./player.model";
import { Scoreboard } from "./scoreboard.model";

export class Game {
  idGame: number;
  listPlayers: Player[];
  listScores: number[];
  scoreBoards: Scoreboard[];
  numberRound = 0;
}
