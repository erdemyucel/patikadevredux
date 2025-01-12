import { useAppSelector } from "../../app/hooks"
import Score from "../Score"
import Square from "../Square"


const Board = () => {

    const boardData = useAppSelector((e) => e.boardSlice.board)

    return (
        <div className='md:w-1/2 h-full items-center mx-auto flex flex-col justify-center'>
            <Score />
            <div className='flex justify-center'>
                <div className='flex flex-col mx-1 h-full justify-center'>
                    <div className='h-12 flex flex-col justify-center'>8</div>
                    <div className='h-12 flex flex-col justify-center'>7</div>
                    <div className='h-12 flex flex-col justify-center'>6</div>
                    <div className='h-12 flex flex-col justify-center'>5</div>
                    <div className='h-12 flex flex-col justify-center'>4</div>
                    <div className='h-12 flex flex-col justify-center'>3</div>
                    <div className='h-12 flex flex-col justify-center'>2</div>
                    <div className='h-12 flex flex-col justify-center'>1</div>
                </div>
                <div className='grid grid-cols-8'>
                    {
                        boardData.map((row) => row.map((square, index) => {
                            return <Square key={index} square={square} />
                        }))
                    }
                </div>
            </div>
            <div className='flex justify-center text-center px-5'>
                <div className='w-12'>A</div>
                <div className='w-12'>B</div>
                <div className='w-12'>C</div>
                <div className='w-12'>D</div>
                <div className='w-12'>E</div>
                <div className='w-12'>F</div>
                <div className='w-12'>G</div>
                <div className='w-12'>H</div>
            </div>

        </div>
    )
}

export default Board