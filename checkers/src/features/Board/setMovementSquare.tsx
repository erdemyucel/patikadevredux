import ESquare from "../../Enums/ESquare"
import EStone from "../../Enums/EStone"
import ISquare from "../../Interfaces/square"




const setMovementSquare = (_board: ISquare[][], _square: ISquare): ISquare[][] => {

    let xPosMovementSquare: { neg: ISquare | null, pos: ISquare | null } = { neg: null, pos: null }
    let yPosMovementSquare: ISquare | null = null
    let checkerPosMovementSquares: ISquare[] = []

    if (_square.stone?.color === EStone.white && _square.pos.y !== 0 && !_square.stone.checkerStatus) {
        for (let i = 1; i < 3; i++) {
            const tempSquare = _board[_square.pos.y - i][_square.pos.x]
            if (tempSquare.stone === null) {
                yPosMovementSquare = tempSquare
                break
            } else if (tempSquare.stone.color === EStone.white) {
                break
            }
        }
    } else if (_square.stone?.color === EStone.black && _square.pos.y !== 7 && !_square.stone.checkerStatus) {
        for (let i = 1; i < 3; i++) {
            const tempSquare = _board[_square.pos.y + i][_square.pos.x]
            if (tempSquare.stone === null) {
                yPosMovementSquare = tempSquare
                break
            } else if (tempSquare.stone.color === EStone.black) {
                break
            }
        }
    } else if (_square.stone?.checkerStatus) {

        let antiStoneCount = 0;
        for (let i = _square.pos.y + 1; i < 8 && antiStoneCount < 2; i++) {
            const tempSquare = _board[i][_square.pos.x]
            if (tempSquare.stone === null) {
                checkerPosMovementSquares.push(tempSquare)
                if (antiStoneCount > 0)
                    antiStoneCount--
            } else if (tempSquare.stone.color === _square.stone.color) {
                break
            } else if (tempSquare.stone !== null && tempSquare.stone.color !== _square.stone.color) {
                antiStoneCount++
            }
        }

        antiStoneCount = 0
        for (let i = _square.pos.y - 1; i > -1 && antiStoneCount < 2; i--) {

            const tempSquare = _board[i][_square.pos.x]
            if (tempSquare.stone === null) {
                checkerPosMovementSquares.push(tempSquare)
                if (antiStoneCount > 0)
                    antiStoneCount--
            } else if (tempSquare.stone.color === _square.stone.color) {
                break
            } else if (tempSquare.stone !== null && tempSquare.stone.color !== _square.stone.color) {
                antiStoneCount++
            }
        }
    }

    if (_square.pos.x === 7 && !_square.stone?.checkerStatus) {

        for (let i = 1; i < 3; i++) {
            const tempSquare = _board[_square.pos.y][_square.pos.x - i]
            if (tempSquare.stone === null) {
                xPosMovementSquare = { ...xPosMovementSquare, neg: tempSquare }
                break
            } else if (tempSquare.stone.color === _square.stone?.color) {
                break
            }
        }

    } else if (_square.pos.x === 0 && !_square.stone?.checkerStatus) {
        for (let i = 1; i < 3; i++) {
            const tempSquare = _board[_square.pos.y][_square.pos.x + i]
            if (tempSquare.stone === null) {
                xPosMovementSquare = { ...xPosMovementSquare, pos: tempSquare }
                break
            } else if (tempSquare.stone.color === _square.stone?.color) {
                break
            }
        }

    } else if (_square.stone?.checkerStatus) {

        let antiStoneCount = 0;
        for (let i = _square.pos.x + 1; i < 8 && antiStoneCount < 2; i++) {

            const tempSquare = _board[_square.pos.y][i]

            if (tempSquare.stone === null) {
                checkerPosMovementSquares.push(tempSquare)
                if (antiStoneCount > 0)
                    antiStoneCount--
            } else if (tempSquare.stone.color === _square.stone.color) {
                break
            } else if (tempSquare.stone !== null && tempSquare.stone.color !== _square.stone.color) {
                antiStoneCount++
            }
        }

        antiStoneCount = 0
        for (let i = _square.pos.x - 1; i > -1 && antiStoneCount < 2; i--) {

            const tempSquare = _board[_square.pos.y][i]
            if (tempSquare.stone === null) {
                checkerPosMovementSquares.push(tempSquare)
                if (antiStoneCount > 0)
                    antiStoneCount--
            } else if (tempSquare.stone.color === _square.stone.color) {
                break
            } else if (tempSquare.stone !== null && tempSquare.stone.color !== _square.stone.color) {
                antiStoneCount++
            }
        }

    } else {

        for (let i = 1; i < 3; i++) {
            const tempSquare = _board[_square.pos.y][_square.pos.x + i]
            if (tempSquare.stone === null) {
                xPosMovementSquare.pos = tempSquare
                break
            } else if (tempSquare.stone.color === _square.stone?.color || tempSquare.pos.x === 7) {
                break
            }
        }
        for (let i = 1; i < 3; i++) {
            const tempSquare = _board[_square.pos.y][_square.pos.x - i]
            if (tempSquare.stone === null) {
                xPosMovementSquare.neg = tempSquare
                break
            } else if (tempSquare.stone.color === _square.stone?.color || tempSquare.pos.x === 0) {
                break
            }
        }
    }

    return _board.map((row) => row.map((square) => {
        if (square === yPosMovementSquare) {
            return { ...square, color: ESquare.moving }
        } else if (square === xPosMovementSquare.neg || square === xPosMovementSquare.pos) {
            return { ...square, color: ESquare.moving }
        } else if (checkerPosMovementSquares.includes(square)) {
            return { ...square, color: ESquare.moving }
        }
        return { ...square, color: ESquare.default }
    }))
}

export default setMovementSquare