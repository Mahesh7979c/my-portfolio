import React from 'react'
import GradientText from './GradientText'
import { MdEmail } from "react-icons/md"
import "../css/contact.css"
import classNames from 'classnames'
import charan from "../assets/charan.jpg"
import { BiLogoLinkedin, BiLogoGithub, BiLogoTwitter } from "react-icons/bi"

function Contact() {
  const socialsLogo = classNames(
    "w-[30px] h-[30px] text-[#fff] duration-1000"
  )
  return (
    <section id='contact' className='md:mx-auto max-w-7xl px-4 sm:px-10 md:px-8 py-20'>
      <div className='flex flex-col-reverse gap-y-0 md:gap-y-0 md:flex-row items-center justify-between md:items-end relative' data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">

        <div className='flex flex-col items-center justify-center md:items-start md:justify-start gap-y-5 md:gap-y-4 w-[100%] md:w-[70%]'>
          <h1>
            <GradientText className="font-bold text-[33px] sm:text-[40px]  md:text-start md:text-[34px] lg:text-[40px] leading-[40px] md:leading-[36px] lg:leading-[54px]" tag="span" text="Get In Touch" />
          </h1>
          <p className='text-[var(--white-primary)] w-[100%] md:w-[80%] lg:w-[70%] text-[13.5px] font-medium tracking-wide text-center  md:text-start'>Have a project in mind? Looking to partner or work together? Reach out through my Social Media links. I'll get back to you in the next 48Hours</p>
          <div className='flex items-center gap-x-4'>


            <a target='_blanck' rel="noreferrer" href='' className='px-2 py-[7px] bg-[#0e76a9] rounded-[50%] duration-500 ease-in-out hover:cursor-pointer hover:bg-[#000]'>

              <BiLogoLinkedin className={socialsLogo} />
            </a>
            <a target='_blanck' rel="noreferrer" href="mailto: shakirfarhan28@gmail.com" className='px-2 py-[7px] bg-[#ea4335] rounded-[50%] duration-500 ease-in-out hover:cursor-pointer hover:bg-[#000]'>
              <MdEmail className={socialsLogo} />

            </a>
            <a target='_blanck' rel="noreferrer" href='' className='px-2 py-[7px] bg-[#333333] rounded-[50%] duration-500 ease-in-out hover:cursor-pointer hover:bg-[#000]'>

              <BiLogoGithub className={socialsLogo} />
            </a>
            <a target='_blanck' rel="noreferrer" href='' className='px-2 py-[7px] bg-[#ea4335] rounded-[50%] duration-500 ease-in-out hover:cursor-pointer hover:bg-[#000]'>
              <BiLogoTwitter className="w-[30px] h-[30px] text-[#fff]" />

            </a>

          </div>
        </div>
        <div className='w-[250px] h-[240px] md:absolute md:right-0 md:-bottom-12'>
          <img className='w-full h-full rounded-[50%] bg-[#fff] object-cover border-[10px] border-[#B97375]' src={charan} alt='Owner Profile' />
        </div>
      </div>
      {/* <section className='py-10 w-[100%] md:w-[65%] lg:w-[50%]'>
        <form className='flex flex-col gap-y-5' ref={form} onSubmit={sendEmail}>
          <div className={inputDiv}>
            <label className={label}>Your Name </label>
            <input className={inputField} onChange={handleOnChange} name='name' type='text' placeholder='Enter your name' value={formData.name} required />
          </div>
          <div className={inputDiv}>

            <label className={label}>Your Email </label>
            <input className={inputField} onChange={handleOnChange} name='email' type='email' placeholder='Enter your Email' value={formData.email} required />
          </div>
          {/* <div className={inputDiv}>

            <label className={label}>Your Budget </label>
            <input className={inputField} onChange={handleOnChange} name='budget' type='text' placeholder='Enter Budget' value={formData.budget} />
          </div> */}
          {/* <div className={inputDiv}>
            <label className={label}>Tell me a bit more about you are looking for? </label>
            <textarea name='message' onChange={handleOnChange} className={inputField} rows={10} cols={10} maxLength={300} type='text' required value={formData.message} />
          </div>
          <button className='text-[14px] font-semibold tracking-wide text-[var(--white-primary)] w-fit px-6 rounded-[36px] py-3 bg-gradient-to-r from-[#B16CEA] via-[#FF5E69] via-[#FF8A56] to-[#ffa84b]' type='submit'>SUBMIT NOW</button>
        </form> */}

      {/* </section> */} 
      {/* <section className='py-10'>
        <div className='flex flex-col gap-y-5'>
          <h2 className='text-[30px] sm:text-[38px] font-bold text-[var(--white-primary)] leading-[45px]'>Frequently Asked <br /> <GradientText text="Questions" />
          </h2>
          <p className='text-[13px] text-[#808080] font-semibold tracking-wide'>Answers to burning questions in your mind</p>
          <button className='text-[14px] font-semibold tracking-wide text-[var(--white-primary)] w-fit px-6 rounded-[36px] py-3 bg-gradient-to-r from-[#B16CEA] via-[#FF5E69] via-[#FF8A56] to-[#ffa84b]'>CONTACT ME</button>

        </div>

        <div className='py-10 flex flex-col gap-y-8' >
          <FAQ question="What is frontend development?" answer="Frontend development refers to the process of building and implementing the user interface (UI) and user experience (UX) elements of a website or application. It involves coding the HTML, CSS, and JavaScript that are responsible for the visual and interactive aspects that users see and interact with in their browsers." />
          <FAQ question="How much does a website cost?" answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ullam voluptas omnis sit molestiae optio natus eaque!" />
          <FAQ question="Do you provide SEO as well?" answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ullam voluptas omnis sit molestiae optio natus eaque!" />
          <FAQ question="Will my website load quickly?" answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ullam voluptas omnis sit molestiae optio natus eaque!" />
        </div>
      </section> */}
    </section>
  )
}

export default Contact