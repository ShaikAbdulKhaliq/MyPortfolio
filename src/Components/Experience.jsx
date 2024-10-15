import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from 'framer-motion'
const Experience = () => {

  const childVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 100, transition: { duration: 0.5 } }
  }
  return (
    <div className='pb-4'>
      <motion.h2
        className='my-20 text-center text-4xl'
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >Experience</motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => {
          return <motion.div key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
              <p className='mb-2 text-sm text-stone-400'>
                {experience.year}
              </p>
            </div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='w-full max-w-xl lg:w-3/4'>
              <h3 className='mb-2 font-semibold'>
                {experience.role} - {" "}
                <span className='text-sm text-stone-500'>
                  {experience.company}
                </span>
              </h3>
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className='mb-4 text-stone-500'>
                {experience.description}
              </motion.p>
              {experience.technologies.map((tech, index) => {
                return <motion.span
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 2 }}
                  className='mr-2 mt-4 rounded bg-stone-900 px-2 text-sm font-medium text-stone-300' key={index}>
                  {tech}
                </motion.span>
              })}
            </motion.div>
          </motion.div>
        })}
      </ div>
    </div>
  )
}

export default Experience