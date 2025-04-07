"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks';
import { motion } from "framer-motion"
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
    const { ref } = useSectionInView('Contact', 0.5);


  return (
    <motion.section id="contact" ref={ref} className='mb-20 sm:mb-28 
    w-[min(100%,38rem)] text-center' 
    initial={{ opacity:0, }}
    whileInView={{ opacity: 1,}}
    transition={{ duration: 1}}
    viewport={{ once: true, }}>
        <SectionHeading>Contact me!</SectionHeading>
    <p className='text-gray-700 -mt-5 dark:text-white/80'>Please reach out to me at {" "}  
        <a className='underline' href='mailto:maheerj914@gmail.com'>
             maheerj914@gmail.com
            </a>{" "} 
    or through the form below.
    </p>
    <form className='mt-10 flex flex-col dark:text-black'
    action={async (formData) => {

      console.log("Running on client");
      console.log(formData.get("senderEmail"));
      console.log(formData.get("message"));

      const { data, error}  = await sendEmail(formData);

      if(error){
        toast.error(error);
        return;
      }
      toast.success("Email sent successfully!");
    }}>
        <input 
        className='h-14 px-4 rounded-lg borderBlack dark:bg-white/80
        dark:focus:bg-white/100 transition-all dark:outline-none' 
        name="senderEmail"
        type='email' 
        required
        maxLength={500}
        placeholder='Your email address'/>
        <textarea 
        className='h-52 my-3 rounded-lg border border-black/10 p-4
        dark:bg-white/80 dark:focus:bg-white/100 transition-all dark:outline-none'
        name='message'
        placeholder='Your message'
        required
        maxLength={500}
        />
        <SubmitBtn />
    </form>
    </motion.section> 
  )
}
