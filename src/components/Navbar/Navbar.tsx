import { useState } from 'react'
import {WrenchScrewdriverIcon, Bars3Icon, XMarkIcon} from '@heroicons/react/16/solid'
import { SelectedPage } from '@/shared/types';
import Link from './Link';
import useMediaQuery from '@/Hooks/useMediaQuery';
import { motion } from 'framer-motion';




type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-gray-50 drop-shadow";
    
  return (
    <nav>
        <div className={`${navbarBackground} w-full fixed top-0 bg-gray-50 p-6 z-30`}>
            <div className={`${flexBetween} w-5/6 mx-auto`}>
                <motion.div 
                    className={`${flexBetween} gap-[0.8px] text-xl md:text-2xl`}
                    initial={{opacity:0, scale:0.5}}
                    animate={{opacity:1, scale: 1}}
                    transition={{duration:1}}
                    >
                    <div 
                        className='flex flex-col items-center justify-center'>
                        <div className='w-12 h-[0.2px] bg-gray-20'></div>
                        <h4 className='text-primary-20 font-courgette'>JUULS</h4>
                        <div className='w-12 h-[0.2px] bg-gray-20'></div>
                    </div>
                    <WrenchScrewdriverIcon className='w-7 md:w-9 text-gray-20'/>
                    <div className='flex flex-col items-center justify-center'>
                    <div className='w-12 h-[0.2px] bg-gray-20'></div>
                    <h4 className='text-primary-20 font-courgette'>DECOR</h4>
                    <div className='w-12 h-[0.2px] bg-gray-20'></div>
                    </div>
                </motion.div>
                {isAboveMediumScreens ? (
                <div className={`${flexBetween} gap-7 text-gray-20 font-roboto text-l md:text-xl`}>
                    <Link
                        page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link
                        page="About"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link
                        page="Services"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                   
                    <Link
                        page="Contact"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                </div>
                
                
                ) : (
                    <button
                        className='w-9 h-9 font-bold text-gray-20'
                        onClick={() => setIsMenuToggled(!isMenuToggled)} 
                    >
                        <Bars3Icon/>
                    </button>
                )}
            </div>
        </div>
                {/* defining menu for mobile */}
                {!isAboveMediumScreens && isMenuToggled && (
                    <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-gray-50 drop-shadow-xl'>
                        <div className='flex justify-end p-12'>
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <XMarkIcon className='h-9 w-9 text-gray-20'/>
                            </button>
                        </div>
                        <div 
                            className='ml-[33%] flex flex-col gap-10 text-xl'
                            >
                            <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="About"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                             <Link
                                page="Services"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                   
                            <Link
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            
                        </div>
                    </div>
                )}
    </nav>
  )
}

export default Navbar