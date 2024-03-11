import facebook from '@/assets/facebook-176-svgrepo-com.svg'
import instagram from '@/assets/instagram-logo-facebook-2-svgrepo-com.svg'
import twitter from '@/assets/twitter-logo-fill-svgrepo-com.svg'

const Footer = () => {
  return (
    <section className='w-full bg-zinc-800'>
        <div className='flex items-center justify-between w-[90%] mx-auto py-9'>
            <div className='text-gray-20 font-roboto text-xs flex items-center gap-1'>
                <span>© 2024 Juuls-Decor</span> <div className='w-[0.5px] h-3 bg-gray-20'></div> <span>All Rights Reserved</span>
            </div>
            <div className='flex gap-2'>
               <a href='#'><img src={facebook} className='facebook W-5 h-5' alt='facebook'/></a> 
               <a href='#'><img src={instagram} className='facebook  W-5 h-5' alt='facebook'/></a> 
               <a href='#'><img src={twitter} className='facebook  W-5 h-5' alt='facebook'/></a>  
            </div>
        </div>

    </section>
  )
}

export default Footer