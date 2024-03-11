import Header from '@/shared/Header'
import Underline from '@/shared/Underline'
import { SelectedPage, serviceType } from '@/shared/types'
import { motion } from 'framer-motion'
import image1 from '@/assets/residential.jpg'
import image2 from '@/assets/commercial.jpg'
import image3 from '@/assets/consultancy.jpg'
import image4 from '@/assets/office.jpeg'
import image5 from '@/assets/revamping.jpg'
import image6 from '@/assets/paintIdeas.jpg'
import Gallery from './Gallery'

const services: Array<serviceType> = [
  {
    title: 'RESIDENTIAL INTERIOR DESIGN',
    image: image1,
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.amet consectetur adipisicing elit.'
  },
  {
    title: 'COMMERCIAL INTERIOR DESIGN',
    image: image2,
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.amet consectetur adipisicing elit.'
  },
  {
    title: 'CONSULTANCY',
    image: image3,
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.amet consectetur adipisicing elit.'
  },
  {
    title: 'OFFICE INTERIOR DESIGN',
    image: image4,
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.amet consectetur adipisicing elit.'
  },
  {
    title: 'HOUSE REVAMPING',
    image: image5,
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.amet consectetur adipisicing elit.'
  },
  {
    title: 'WALL PAINT IDEAS',
    image: image6,
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.amet consectetur adipisicing elit.'
  }


];

// creating motion effect
const childVariant = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}



const Services = ({setSelectedPage}: Props) => {



  return (
    <section
        id='services'
        className='mt-9'
    >
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Services)}>
          <motion.div 
            className='mb-9'
            initial='hidden'
            whileInView='visible'
            viewport={{once:true, amount:0.5}}
           transition={{duration: 1}}
        // this sets initial and final keyword
            variants = {{
            hidden: { opacity: 0, x:-50},
            visible: { opacity: 1, x: 0},
           }}
            >
            <Header>OUR SERVICES</Header>
            <Underline/>
          </motion.div>
          
          <div>
            <ul  className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
              {services.map((item, index) => (
                 <motion.li
                 className='relative inline-block h-[300px] mt-5 w-[400px] mx-auto'
                 key={index}
                 variants={childVariant}
                 initial='initial'
                 whileInView='animate'
                 viewport ={{
                   once: true,
                 }}
                 custom={index}
                 >
                <Gallery
                  key={`${item.title}-${index}`}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  setSelectedPage={setSelectedPage}
                />
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
        

    </section>
  )
}

export default Services