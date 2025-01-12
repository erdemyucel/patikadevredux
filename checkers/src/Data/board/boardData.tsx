import ESquare from "../../Enums/ESquare";
import EStone from "../../Enums/EStone";
import ISquare from "../../Interfaces/square";


let stoneCount = 0
let BoardDataArray: ISquare[][] = [[], [], [], [], [], [], [], []]


for (let yPos = 0; yPos < 8; yPos++) {
    for (let xPos = 0; xPos < 8; xPos++) {

        const tempSquare: ISquare = { pos: { x: xPos, y: yPos }, color: ESquare.default, stone: null }

        if (yPos === 1 || yPos === 2) {
            BoardDataArray[yPos][xPos] = { ...tempSquare, stone: { id: stoneCount, color: EStone.black, checkerStatus: false } }
            stoneCount++
        } else if (yPos === 5 || yPos === 6) {
            BoardDataArray[yPos][xPos] = { ...tempSquare, stone: { id: stoneCount, color: EStone.white, checkerStatus: false } }
            stoneCount++
        } else {
            BoardDataArray[yPos][xPos] = { ...tempSquare }
        }


    }
}





export default BoardDataArray