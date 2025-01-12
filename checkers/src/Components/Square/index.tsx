import { useAppDispatch } from '../../app/hooks'
import { selectEmptySquare, selectSquareInStone } from '../../features/Board/boardSlice'
import ISquare from '../../Interfaces/square'
import Stone from '../Stone'

const Square = ({ square }: { square: ISquare }) => {

    const dispatch = useAppDispatch()

    const squareClick = () => {
        if (square.stone !== null) {
            dispatch(selectSquareInStone(square))
        } else
            dispatch(selectEmptySquare(square))
    }

    return (
        <div onClick={squareClick} style={{ backgroundColor: square.color }} className='h-12 w-12 border border-black p-1'>
            <Stone stone={square.stone} />
        </div>
    )
}

export default Square