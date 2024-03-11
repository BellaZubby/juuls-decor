import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SelectedPage } from '@/shared/types';
import image1 from '@/assets/heroImg1.jpg'
import image3 from '@/assets/heroImg3.jpg';
import image2 from '@/assets/heroImg2.jpg'
import { heroslideType } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';


type Props = {
    setSelectedPage: (value:SelectedPage) => void;
}

const heroSlide: Array<heroslideType> = [
    {
        heroImage: image1
    },
    {
        heroImage: image2
    },
    {
        heroImage: image3
    },
   
]



const Home = ({setSelectedPage}: Props) => {
    const [currentState, setCurrentState] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if(currentState === 2) {
                setCurrentState(0)
            } else {
                setCurrentState(currentState + 1)
            }
        }, 2000)
        return () => clearTimeout(timer)
    }, [currentState]);

    // const moveDot = (index: React.SetStateAction<number>) => {
    //     setCurrentState(index)
    // }


    const bgImageStyle = {
        backgroundImage: `url(${heroSlide[currentState].heroImage})`,
        backgroundPosition: 'cover',
        backgroundSize: 'cover',
    }

  return (
    <section
        id="home"
        className='mt-18 h-full'
    >
       <motion.div 
        style={bgImageStyle} 
        className='w-full h-[570px]'
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
           <div className='w-full h-[570px] bg-primary-100 flex items-center'>
             <motion.div 
                className='ml-9 w-[60%] md:w-[33%] md:ml-24'
                initial='hidden'
                whileInView='visible'
                viewport={{once:true, amount:0.5}}
                transition={{delay: 0.5, duration: 1}}
                // this sets initial and final keyword
                variants = {{
                    hidden: { opacity: 0, x:-50},
                    visible: { opacity: 1, x: 0},
                }}
                >
                <h1 className='font-roboto text-[25px] xs:text-[50px] text-gray-200 font-bold'>JUULS <span className='text-primary-20'>DECOR</span></h1>
                <p className='text-gray-200 font-raleway text-l mt-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Minus culpa et consequatur.
                </p>
                <div className='flex gap-6 mt-6'>
                    <AnchorLink 
                        className='bg-primary-20 p-3 rounded-lg text-white font-roboto cursor-pointer'
                        onClick={() => setSelectedPage(SelectedPage.About)}
                        href={`#${SelectedPage.About}`}
                        >About us
                    </AnchorLink>
                    <AnchorLink 
                        className='text-white border border-gray-20 p-3 rounded-lg font-roboto cursor-pointer'
                        onClick={() => setSelectedPage(SelectedPage.Contact)}
                        href={`#${SelectedPage.Contact}`}
                        >Contact us
                    </AnchorLink>
                </div>
             </motion.div>
            </div> 
       </motion.div>
    </section>
  )
}

export default Home