import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"





const Card = ({data, reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2} className='relative flex-shrink-0 w-60 h-72 rounded-[50px] bg-zinc-700 text-white px-8 py-10 overflow-hidden'>

        <FaRegFileAlt />

        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        
        <div className='Footer absolute bottom-0 w-full left-0'>
          <div className='flex items-center justify-between px-8 py-3 mb-3'>
            <h5>{data.filesize}</h5>
            <span className='w-7 h-7 bg-sky-200 rounded-full flex items-center justify-center'>
                {data.close ? <IoMdClose color='#000' /> : <MdOutlineFileDownload size=".8em" color='#000'/>}
                

            </span>

          </div>
            {
              data.tag.isOpen && (
                <div className={`tag w-full py-4 ${data.tag.TagColor === "blue" ? "bg-blue-500" : "bg-green-500"} flex items-center justify-center`}>
                    <h3 className='text-sm font-semibold' >{data.tag.TagTitle}</h3>
                </div>
              ) 
            }
         
        </div>

    </motion.div>

  )
}

export default Card