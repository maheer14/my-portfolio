"use client"

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"

export default function About() {
 const { ref } = useSectionInView('About',);

  return( 
  <motion.section ref={ref} className='mb-28 max-w-[45rem] text-center 
  leading-8 sm:mb-40 scroll-mt-28'
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }} //optional animate?
  transition={{ delay: 0.175 }}
  id = "about"
  >
    <SectionHeading>About me</SectionHeading>
    <p className="mb-3"> I'm a 
      <span className="font-medium"> Computer Science</span> student with a passion for building efficient systems. 
      Currently working as a Research Assistant in a <span className="font-medium">Flask/React/Java</span> video analytics project, 
      which involves <span className="font-medium"> modifying hash tables and data structures</span> to ensure seamless data flow between the client and server. 
      I collaborate on integrating these changes with the frontend, ensuring <span className="italic"> proper API responses and maintaining consistency</span>. 
      I particularly enjoy coding in 
      <span className="font-medium"> Java and Python
      </span> as well as <span className="font-medium"> crafting responsive frontends</span>.
    </p>
    <p className="mb-3"> My technical sweet spot includes <span className="font-medium">full-stack development</span> and 
    <span className="font-medium"> performance optimization:  
    </span> whether it be reducing bugs and errors by rigorous testing or improving my portfolio using <span className="font-medium">Next.js</span>.
     Additionally, I have experience in troubleshooting issues related to <span className="font-medium"> data handling</span>, optimizing server-side logic in a 
     <span className="font-medium"> Biomedical Research Project</span>.
    </p>
    
  </motion.section>
  )
}
/**<p>
    I have great <span className="italic">interpersonal and communication skills</span> having worked in 
    a multitude of diverse teams for classes, research, competitions and more. I am genuinely passionate about {" "}
    <span className="font-medium">programming and teamwork</span>, so I hope we can connect and contribute to something great!
    </p> */
