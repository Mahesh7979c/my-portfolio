import React, { useEffect, useState } from 'react'
import "../css/home.css"
import ImageFrame from '../components/ImageFrame'
import GradientText from '../components/GradientText'
import { skills } from '../constants/info'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import TopArrow from '../assets/TopArrow'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import EducationCard from '../components/EducationCard'

function Home() {
  const [mode, setMode] = useState("dark")
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = 10;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    document.body.className = mode + '-mode';
  }, [mode]);
  return (
    <>
      {
        isLoading ? <Loading /> :
          <>
            <Navbar setMode={setMode} mode={mode} />
            <header className={`${mode === "dark" ? "" : ""}`}>
              <div className='h-fit w-full  flex md:py-7 flex-row  items-center justify-center max-w-7xl px-4 pt-32 md:pt-0 sm:px-10 md:px-8 md:gap-x-0 gap-x-6 xl:gap-x-10 md:mx-auto gap-y-0 md:gap-y-0 md:mt-32'>
                <div className='w-[96%] md:w-[50%] flex flex-col gap-y-[20px] items-start sm:items-center justify-between md:items-start' data-aos="fade-up"
                  data-aos-duration="1000">
                  <h1 className='text-[var(--white-primary)] font-poppins font-extrabold tracking-[0.6px] text-[33px] sm:text-[40px] sm:text-center md:text-start md:text-[30px] lg:text-[40px] leading-[39px] '>
                    <GradientText style={{ fontWeight: "700px" }} tag="h1" text="Hello, I am Charan Tej Sai," />
                   A full stack developer
                  </h1>
                  <p className='text-[var(--white-primary)] text-[13.5px] font-medium tracking-wide sm:text-center md:text-start'>If your Looking for a developer who can work on web projects and is willing to try out new roles? or if you need a versatile and motivated developer, feel free to reach out to me.</p>
                  <div className='flex sm:gap-x-3 gap-y-3 sm:gap-y-0 flex-col sm:flex-row'>
                    <a href='#contact' rel="noreferrer" className='gitintouchBTN px-6 py-3 rounded-[20px]  text-[var(--white-primary)]  font-bold tracking-[0.5px] text-[12px]'>GET IN TOUCH</a>
                  </div>
                </div>
              </div>
            </header>
            
            <section className='mx-auto max-w-7xl pt-32 flex flex-col md:flex-row justify-start  md:items-center md:justify-between px-4 sm:px-10 md:px-8'>
              <div className='flex flex-col mb-28  gap-y-7 md:gap-y-3  md:w-[30%] lg:w-[35%] xl:w-[40%] md:pb-0' 
              data-aos="fade-up-right"
                data-aos-duration="5000"
                >

                <GradientText tag="h5" style={{ fontWeight: "700", fontSize: "18px", letterSpacing: "0.6px" }} text="Charan Tej Sai" />
                <h3 className='font-bold text-[26px] tracking-wide text-[var(--white-primary)]'>Full Stack Developer </h3>
              </div>
              <div className='md:w-[70%] lg:w-[60%] xl:w-[52%] flex flex-col gap-y-1' data-aos="fade-left" data-aos-duration="3800">
                <p className='text-[var(--white-primary)] text-[17px] font-semibold tracking-wide'>I am a Full Stack developer, whose passionate about developing strong and engaging web applications.</p>
                <p className='text-[var(--white-primary)] text-[12.5px] font-medium tracking-wide'>Along with that, I am an active participant in communities as a lead and member. Because I think it's important to share knowledge and learn from others, I've been able to keep up with the most recent business trends and best practises.</p>
              </div>
            </section>
            {/*  */}
            <section className='mx-auto max-w-7xl pt-9 px-4 sm:px-10 md:px-8 'id='skills'>
            <div className='text-center mb-14'>
                  <GradientText text="Skills" className="tracking-wide font-bold text-[38px]" tag="span" />
                </div>
              <div className='pt-5' data-aos="fade-right" >
                <div className='flex flex-wrap gap-x-3 gap-y-3 md:gap-x-6 pt-5 md:gap-y-6'>
                  {
                    skills.map((item) => {
                      return (
                        <ImageFrame img={item.logo} name={item.name} />
                      )
                    })
                  }
                </div>
              </div>
            </section>
            <section className='pt-10 md:mx-auto max-w-7xl px-4 sm:px-10 md:px-8 flex flex-col justify-center' id='education' >
              <div className='text-center mb-12'>
                <GradientText text="Education" className="tracking-wide font-bold text-[38px] text-center mb-6" tag="span" />
              </div>
              <div className='grid gap-y-4 grid-cols-1 md:grid-cols-2 gap-x-4'>
                <EducationCard duration="2021-2025" type="Graduation" degree="Bachelor's Degree" degreeType="B-Tech" course="Computer Science Engineering" schoolName="Gandhi Institute of Technology and Management (GITAM)" schoolLocation="Hyderabad, Telangana, India" cardType={1} />
                <EducationCard duration="2019-2021" type="High School" degree="Intermediate" course="Science (MPC)" schoolName="Narayana Junior College" schoolLocation="Vijayawada, Andhra pradesh, India" cardType={2} />
              </div>
            </section>
            <Contact />
            <TopArrow />
            <Footer />
          </>
      }
    </>

  )
}

export default Home