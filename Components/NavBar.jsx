import { BeakerIcon,UserIcon } from '@heroicons/react/24/outline'
import logo from '../src/assets/utravs-logo.svg'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
function NavBar (){

    return(

        <div className=' flex h-16 border-b-[1px] border-slate-400 mx-4 sm:mx-20'>
        <div className=' flex flex-1 flex-row items-center text-xs '>
          {/* left menu-  hidden حالت دیفالت - sm:inline ازین سایز به بالا نشون داده بشه */}
          <motion.div
            initial={{y:-100,opacity:0}} 
            animate={{ y: 0,opacity:1 }}
         
            transition={{ ease: "easeOut", duration: 1 }}

           className='hidden sm:inline basis-1/3'> ورود/ثبت نام</motion.div>
          <UserIcon className=" sm:hidden h-5 w-5 cursor-pointer" />
          <div className='cursor-pointer justify-start pl-3'>پیگیری خرید</div>
          <div className='hidden sm:inline'>
            
          <Link to={`azam`}> تماس با ما / 1548</Link>
            </div>
          
          
          {/* //logo  */}
          <div className=' flex flex-1 justify-end items-center' >
            <img src={logo} className=' w-20 h-20 item-center ' />
          </div>
        </div>
      </div>
    )
} 

export default NavBar

     