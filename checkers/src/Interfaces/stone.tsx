import EStone from "../Enums/EStone";

export default interface IStone {
    id: number,
    color: EStone,
    checkerStatus: boolean
}