import Header from '@/shared/Header'
import Underline from '@/shared/Underline'
import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
SelectedPage

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Contact = ({setSelectedPage}: Props) => {
// styles for my inputs
    const inputStyles = `mb-5 w-full rounded-lg bg-gray-50 px-5 py-3 placeholder-white text-gray-20`;
    const {
        register,
        trigger,
        formState: {errors}
    } = useForm();

    // onSubmit function
    const onSubmit = async(e:any) => {
        const isValid = await trigger();
        if(!isValid) {
            e.preventDefault();
        }
    }
  return (
    <section id='contact' className='py-12 mt-9 bg-gray-20 w-[100%]'>
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}>
            <motion.div
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
                <Header>CONTACT US</Header>
                <Underline/>
            </motion.div>
            {/* form */}
        <motion.div 
            className='w-[70%] md:w-[35%] mx-auto mt-9'
            initial='hidden'
            whileInView='visible'
            viewport={{once:true, amount:0.5}}
            transition={{delay: 0.2, duration: 1}}
        // this sets initial and final keyword
            variants = {{
            hidden: { opacity: 0, y:50},
            visible: { opacity: 1, y: 0},
           }}
            >
               <form 
                target="_blank"
                onSubmit={onSubmit}
                action="https://formsubmit.co/def8d2055cfa3e74e8af3af38ff4f818"
                method="POST"
               >

                <input
                    className={inputStyles}
                    type='text'
                    placeholder='Name'
                    {...register('name', {
                        required: true,
                        maxLength: 100
                        
                    })}
                />
                 {errors.name && (
                                <p className="text-red-700 text-xs mb-2">
                                    {errors.name.type === "required" && "This field is required."}
                                    {errors.name.type === "maxLength" && "Max length is a 100 characters."}
                                </p>
                )}
                <input
                    className={inputStyles}
                    type='text'
                    placeholder='Email'
                    {...register('email', {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                />

                {errors.email && (
                    <p className="text-red-700 text-xs mb-2">
                        {errors.email.type === "required" && "This field is required."}
                        {errors.email.type === "pattern" && "Invalid email address."}
                    </p>
                )}
                <textarea
                    className={inputStyles}
                    rows={4}
                    cols={50}
                    placeholder="MESSAGE"
                    {...register('message', {
                        required: true,
                        maxLength:2000
                    })}
                />
                 {errors.message && (
                                <p className="text-red-700 text-xs mb-2">
                                    {errors.message.type === "required" && "This field is required."}
                                    {errors.message.type === "maxLength" && "Max length is a 2000 characters."}
                                </p>
                    )}
                    <button
                        type="submit"
                        className="mt-3 text-gray-20 rounded-lg bg-primary-20 px-10 py-3 transition duration-500 hover:text-white font-bold"
                    > SEND
                    </button>
               </form>
        </motion.div>
        </motion.div>  
    </section>
  )
}

export default Contact

