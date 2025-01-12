import { useAppSelector } from "../../app/hooks"


const Score = () => {

    const score = useAppSelector((e) => e.boardSlice.score)

    return (
        <div className='flex justify-around w-full mb-5 text-xl'>
            <div>
                <span>White:</span>
                <span>{score.white}</span>
            </div>
            <div>
                <span>Black:</span>
                <span>{score.black}</span>
            </div>
        </div>
    )
}

export default Score