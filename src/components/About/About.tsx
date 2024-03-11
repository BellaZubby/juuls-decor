import Header from '@/shared/Header';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import Underline from '@/shared/Underline';



type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const About = ({setSelectedPage}: Props) => {
  return (
    <section
        id='about'
        className=' flex items-center w-5/6 mx-auto h-screen'
    >
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.About)}>
            
            <motion.div 
                className='flex flex-col items-center justify-center'
                initial='hidden'
                whileInView='visible'
                viewport={{once:true, amount:0.5}}
               transition={{duration: 1}}
            // this sets initial and final keyword
                variants = {{
                hidden: { opacity: 0, x:50},
                visible: { opacity: 1, x: 0},
               }}
                >
                <Header>ABOUT US</Header>
                <Underline/>
                </motion.div>
                <motion.div
                   initial='hidden'
                   whileInView='visible'
                   viewport={{once:true, amount:0.5}}
                  transition={{ delay: 0.2, duration: 1}}
               // this sets initial and final keyword
                   variants = {{
                   hidden: { opacity: 0, x:-50},
                   visible: { opacity: 1, x: 0},
                  }}
                >
                <p className='text-justify text-sm md:text-l leading-8 font-raleway md:w-[65%] md:mx-auto mt-9'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque eum laudantium enim rerum molestias reiciendis, repellendus ducimus nesciunt voluptates aut in, 
                    cumque consequuntur tenetur minima tempora rem soluta doloribus velit ipsa distinctio, porro adipisci ullam? Consectetur libero vitae voluptatem repellendus ipsa, harum autem! Repellendus nostrum eos molestias, necessitatibus dolore ratione.
                    sit, amet consectetur adipisicing elit. sit, amet consectetur adipisicing elit. sit, amet consectetur adipisicing elit. sit, amet consectetur adipisicing elit. 
                    sit, amet consectetur adipisicing elit. sit, amet consectetur adipisicing elit. sit, amet consectetur adipisicing elit. sit, amet consectetur adipisicing elit. 
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque eum laudantium enim rerum molestias reiciendis, repellendus ducimus nesciunt voluptates aut in, 
                    cumque consequuntur tenetur minima te
                    </p>
            </motion.div>
        </motion.div>

    </section>
  )
}

export default About