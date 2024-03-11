

type Props = {}

const Underline = ({}: Props) => {
  return (
    <div>
        <div className='flex items-center justify-center'>
            <div className='bg-gray-50 w-10 h-[0.5px]'></div>
            <div className='bg-transparent border border-gray-50 w-2 h-2 rounded-full'></div>
            <div className='bg-gray-50 w-10 h-[0.5px]'></div>
        </div>
    </div>
  )
}

export default Underline