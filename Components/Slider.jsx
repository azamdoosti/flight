
import {  XCircleIcon } from '@heroicons/react/24/outline'
import slide from '../src/assets/flight.webp'
import plane from '../src/assets/plain.svg'
import train from '../src/assets/train.svg'
import hotel from '../src/assets/hotel.svg'
import {  useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { AnimatePresence, motion } from "framer-motion"


function Slider() {


    const { data, isLoading } = useQuery({
        queryFn: async () => {

            const { data } = await axios.get('https://gorest.co.in/public/v2/posts')
            console.log(data)
            return data
        }

    })

    // const data = [{ title: 'طریق سایت و اپلیکیشن یوتراوز امکانپذیر است', id: 1 },
    // { title: 'گاهی اوقات ممکن است در شرایطی قرار بگیرید که علی‌', id: 2 },
    // { title: 'انتخاب قطار برای سفر، یکی از بهترین راه‌ها برای مد', id: 3 }]

    // useEffect(() => {   usequery

    //     alert('salaaaam')

    // }, [showmenu])

    const [selectedButton, setselectedButton] = useState('parvaz')

    // let selectedButton='hotel'
    return (
        <div className=' relative sm:mx-20'>
            <div className=' sm:px-0 px-4 flex justify-end items-center'>
                <span className=' pt-3 pb-3 px-1 text-xs'>
                    اطلاع از آخرین شرایط <a href='https://utravs.com/umag/Information/Travel-Limits' className='text-blue-400 cursor-pointer font-bold '>سفر و استرداد</a> با توجه به شیوع کرونا</span>
                <XCircleIcon className='h-5 w-5 '></XCircleIcon>
            </div>
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}

                transition={{ ease: "easeOut", duration: 1 }}


                className=' flex-1  flex justify-cente sm:bg-transparent bg-blue-600 h-52 sm:h-auto '>

                {selectedButton === 'parvaz' && <img className=' hidden sm:inline rounded-3xl ' src={slide}></img>}
                {selectedButton === 'ghatar' && <img className=' hidden sm:inline rounded-3xl ' src={slide}></img>}
                {selectedButton === 'hotel' && <img className=' hidden sm:inline rounded-3xl ' src={slide}></img>}

            </motion.div>
            <div className='absolute -bottom-4 w-full flex flex-1 justify-center'>

                <div className='  bg-yellow-200  flex flex-1 mx-2 sm:mx-5 justify-center  flex-col '>

                    <div className=' flex justify-end mx-2 pt-5 pb-3' >
                        {selectedButton === 'parvaz' && <p>بلیط هواپیما</p>}
                        {selectedButton === 'ghatar' && <p>بلیط قطار</p>}
                        {selectedButton === 'hotel' && <p>بلیط هتل</p>}

                    </div>
                    <div className='flex justify-end mb-2 '>
                        <div className=' '>
                            <button onClick={() => { setselectedButton('hotel') }} className={` ${selectedButton === 'hotel' ? 'bg-red-300' : 'bg-white'} flex flex-row items-center space-x-2 shadow hover:bg-gray-100 bg-white rounded-lg py-2 px-4 pb-  mx-2 `}>
                                <img src={hotel} className=' w-6 h-6'></img>
                                <span>هتل</span>
                            </button>
                        </div>
                        <div className=' '>
                            <motion.button
                              whileHover={{scale:1.1,rotate:15}}
                            onClick={() => { setselectedButton('ghatar') }} className={`${selectedButton === 'ghatar' ? 'bg-red-300' : 'bg-white'} flex flex-row items-center space-x-2 shadow hover:bg-gray-100 bg-white rounded-lg py-2 px-4 pb-  mx-2 `}>
                                <img src={train} className='w-6 h-6'></img>
                                <span>قطار</span>
                            </motion.button>
                        </div>
                        <div className=' '>
                            <button onClick={() => { setselectedButton('parvaz') }} className={`${selectedButton === 'parvaz' ? 'bg-red-300' : 'bg-white'} flex flex-row items-center space-x-2 shadow hover:bg-gray-100 bg-white rounded-lg py-2 px-4 pb-  mx-2`}>
                                <img src={plane} className='w-6 h-6'></img>
                                <span>پرواز</span>
                            </button>
                        </div>

                    </div>
                    <div>

                    </div>
                    {/* //box sefid */}

                    {selectedButton === 'parvaz' &&
                        <AnimatePresence>
                            <motion.div
                          
                                initial={{ y: -100, opacity: 0 }}
                                key="modal"
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y:-100,opacity: 0 }}
                                transition={{ ease: "easeOut", duration: 1 }}
                                className=' border bg-white  mr-2 ml-2 h-28 rounded-2xl items-center'>
                                {isLoading && <p>لطغا منتطز باشید</p>}
                                {!isLoading && JSON.stringify(data)}


                                {/* {data.map((row) => {

                         return   <p key={key.id} className='text-red-400'>{row.title}</p>

                        })} */}
                            </motion.div>
                            </AnimatePresence>}



                    {selectedButton === 'ghatar' &&
                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeOut", duration: 1 }}
                            className='  border bg-white  mr-2 ml-2 h-28 rounded-2xl items-center'>
                            ghatar
                        </motion.div>}
                    {selectedButton === 'hotel' && <div className='  border bg-white  mr-2 ml-2 h-28 rounded-2xl items-center'>
                        hotel
                    </div>}
                </div>

            </div>
        </div>

    )

} export default Slider