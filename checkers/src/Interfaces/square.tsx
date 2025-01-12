import ESquare from "../Enums/ESquare";
import IStone from "./stone";



export default interface ISquare {
    pos: { x: number, y: number },
    color: ESquare,
    stone: IStone | null
}