import React from 'react'
import {motion} from "framer-motion"


interface ProjectTagProps {
  tag: string
  position: number
}
export const ProjectTag = ({tag, position}: ProjectTagProps) => {
  return (
    <motion.div 
      className='px-3 py-1 border border-gray-800 bg-gray-900 text-white rounded-3xl'
      initial={{opacity: 0, y: 5}}
      animate={{opacity: 1, y: 0}}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: position *0.3,
      }}
    >
      <h4>
        {tag}
      </h4>
    </motion.div>
  )
}
