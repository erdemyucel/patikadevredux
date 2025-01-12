import ESquare from "../../Enums/ESquare"
import ISquare from "../../Interfaces/square"


const moveStone = (_board: ISquare[][], selectSquareInStone: ISquare, selectEmptySquare: ISquare): ISquare[][] => {

    let antiStoneInSquare: ISquare[] = []
    const yPosDiff = selectSquareInStone.pos.y - selectEmptySquare.pos.y
    const xPosDiff = selectSquareInStone.pos.x - selectEmptySquare.pos.x

    if (yPosDiff > 1) {
        _board.slice(selectEmptySquare.pos.y + 1, selectSquareInStone.pos.y).forEach((row) => row.forEach((square) => {
            if (square.pos.x === selectEmptySquare.pos.x && square.stone !== null)
                antiStoneInSquare.push(square)
        }))

    } else if (yPosDiff < 0) {
        _board.slice(selectSquareInStone.pos.y + 1, selectEmptySquare.pos.y).forEach((row) => row.forEach((square) => {
            if (square.pos.x === selectEmptySquare.pos.x && square.stone !== null)
                antiStoneInSquare.push(square)
        }))

    } else if (xPosDiff < 0) {
        antiStoneInSquare = _board[selectSquareInStone.pos.y].filter((square) => square.pos.x > selectSquareInStone.pos.x && square.pos.x < selectEmptySquare.pos.x)

    } else if (xPosDiff > 1) {
        antiStoneInSquare = _board[selectSquareInStone.pos.y].filter((square) => square.pos.x < selectSquareInStone.pos.x && square.pos.x > selectEmptySquare.pos.x)
    }


    return _board.map((row) => row.map((square) => {

        if (square.pos.x === selectEmptySquare.pos.x && square.pos.y === selectEmptySquare.pos.y) {

            const tempCheckerStatus = selectEmptySquare.pos.y === 7 || selectEmptySquare.pos.y === 0 || selectSquareInStone.stone?.checkerStatus ? true : false
            if (selectSquareInStone.stone !== null)
                return { ...square, stone: { ...selectSquareInStone.stone, checkerStatus: tempCheckerStatus }, color: ESquare.default }

        } else if (square.pos.x === selectSquareInStone.pos.x && square.pos.y === selectSquareInStone.pos.y) {

            return { ...square, stone: null }

        } else if (antiStoneInSquare.includes(square)) {

            return { ...square, stone: null, color: ESquare.default }
        }

        return { ...square, color: ESquare.default }
    }))
}

export default moveStone