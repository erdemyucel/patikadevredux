import EStone from "../Enums/EStone";
import ISquare from "./square";



export default interface IBoardSlice {
    board: ISquare[][],
    squareWithInStone: ISquare | null,
    turn: EStone,
    score: { white: number, black: number }
}