import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import BoardDataArray from "../../Data/board/boardData";
import ESquare from "../../Enums/ESquare";
import EStone from "../../Enums/EStone";
import IBoardSlice from "../../Interfaces/boardSlice";
import ISquare from "../../Interfaces/square";
import moveStone from "./moveStone";
import setMovementSquare from "./setMovementSquare";


const initialState: IBoardSlice = {
    board: [...BoardDataArray],
    squareWithInStone: null,
    turn: EStone.white,
    score: { white: 0, black: 0 }
}


export const boardSlice = createSlice(
    {
        name: 'board',
        initialState,
        reducers: {
            selectSquareInStone: (state: IBoardSlice, actions: PayloadAction<ISquare>) => {
                if (actions.payload.stone !== null && actions.payload.stone.color === state.turn) {
                    state.squareWithInStone = { ...actions.payload }
                    state.board = setMovementSquare([...state.board], { ...actions.payload })
                }
            },
            selectEmptySquare: (state: IBoardSlice, actions: PayloadAction<ISquare>) => {
                if (actions.payload.color === ESquare.moving && state.squareWithInStone !== null) {
                    const tempBoard = moveStone([...state.board], { ...state.squareWithInStone }, { ...actions.payload })


                    const tempBoardWhiteStoneCount = tempBoard.map((row) => row.filter((square) => square.stone?.color === EStone.white)).filter((row) => row.length !== 0).map((e) => e.length).reduce((a, b) => a + b, 0)
                    const tempBoardBlackStoneCount = tempBoard.map((row) => row.filter((square) => square.stone?.color === EStone.black)).filter((row) => row.length !== 0).map((e) => e.length).reduce((a, b) => a + b, 0)
                    const stateBoardWhiteCount = state.board.map((row) => row.filter((square) => square.stone?.color === EStone.white)).filter((row) => row.length !== 0).map((e) => e.length).reduce((a, b) => a + b, 0)
                    const stateBoardBlackCount = state.board.map((row) => row.filter((square) => square.stone?.color === EStone.black)).filter((row) => row.length !== 0).map((e) => e.length).reduce((a, b) => a + b, 0)

                    if (stateBoardWhiteCount !== tempBoardWhiteStoneCount) {
                        state.score.black++
                    } else if (stateBoardBlackCount !== tempBoardBlackStoneCount) {
                        state.score.white++
                    } else {
                        if (state.turn === EStone.white)
                            state.turn = EStone.black
                        else
                            state.turn = EStone.white
                    }
                    state.board = tempBoard
                }
            }
        }
    }
)

export const { selectSquareInStone, selectEmptySquare } = boardSlice.actions

