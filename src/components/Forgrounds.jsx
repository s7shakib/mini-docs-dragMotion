import React, { useState,useRef } from 'react'
import Card from './Card'




const Forgrounds = () => {
const ref = useRef(null);

const data = [{
    desc:"Lorem ipsum dolor sit, amet consectetur adipisicing", 
    filesize:".9mb", 
    close:false,
    tag: {isOpen: true, TagTitle: "Download Now", TagColor: "green", } 
  },
  {
    desc:"Lorem ipsum dolor sit, amet consectetur adipisicing", 
    filesize:".9mb", 
    close:false,
    tag: {isOpen: true, TagTitle: "Download Now", TagColor: "blue", } 
  },
  {
    desc:"Lorem ipsum dolor sit, amet consectetur adipisicing", 
    filesize:".9mb", 
    close:true,
    tag: {isOpen: true, TagTitle: "Upload", TagColor: "green", } 
  }
]
  return (
    
        <div ref={ref} className=' fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5 '>

            {data.map((item, index) => (
              <Card data={item} reference={ref}/>
            ))

            }
          
          </div>
   
  )
}

export default Forgrounds