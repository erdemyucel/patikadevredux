import IStone from "../../Interfaces/stone"



const Stone = ({ stone }: { stone: IStone | null }) => {
    return (
        <div style={{ backgroundColor: stone?.color }} className='w-full h-full rounded-full' />
    )
}

export default Stone