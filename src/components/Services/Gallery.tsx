import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll'



type Props = {
    title: string;
    image: string;
    description: string;
    setSelectedPage: (value: SelectedPage) => void;

}

const Gallery = ({title, image, description, setSelectedPage}: Props) => {
    const overlayStyles =`p-5 absolute z-20 flex h-[300px] w-[400px] flex-col
    items-center justify-center whitespace-normal bg-gray-20 text-center
    text-gray-50 opacity-0 transition duration-500 hover:opacity-90`
  return (
    <>
        <div className={overlayStyles}>
            <p className='text-2xl font-bold text-gray-700'>{title}</p>
            <p className='mt-5'>{description}</p>
            <AnchorLink 
                        className='bg-transparent border border-gray-700 rounded-lg p-1 text-gray-700 font-roboto cursor-pointer mt-7 font-bold'
                        onClick={() => setSelectedPage(SelectedPage.Contact)}
                        href={`#${SelectedPage.Contact}`}
                        >Learn More
            </AnchorLink> 
        </div>
        <div>
        <img className='h-[300px] w-[400px]' src={image} alt={`${image}`}/>
        </div>
    
    </>
  )
}

export default Gallery