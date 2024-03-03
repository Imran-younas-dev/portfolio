import React from 'react'
import Header from '../components/Header'
import data from "../Data/data.json"
import Hero from '../components/Hero'
import Socials from '../components/Socials'
import About from '../components/About'
import Skills from '../components/skills/Skills'
import Projects from '../components/projects/Projects'
import Experiences from '../components/experiences/Experiences'
import Contact from '../components/Contact'
// import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'
import WhatsAppIcon from '../components/WhatsAppIcon '
const Home = () => {
    return (
        <>
            <Header logo={data.main.name} />
            <Hero data={data.main} />
            <Socials data={data.socials} />
            <About  aboutData={data.about} name={data.main.name} />
            <Skills skillData={data.skills} />
            <Projects projectsData={data.projects} />
            <Experiences experienceData={data.experiences} educationData={data.educations} testonomialData = {data.testimonials} />
            <Contact />
            {/* <CallToAction /> */}
            <Footer socials={data.socials} name={data.main.name} />
            <WhatsAppIcon />
        </>
    )
}

export default Home