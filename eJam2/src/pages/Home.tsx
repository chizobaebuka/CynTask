import React from "react"
import Navbar from "../components/Navbar"
import Clarifion from "../components/Clarifion"
import Hero from "../components/Hero"
import Steps from "../components/Steps"
import Main from '../components/Main';
import Footer from "../components/Footer"
import ClarifionMobile from "../components/ClarifionMobile"
import NavbarMobile from "../components/NavbarMobile"
import StepsMobile from "../components/StepsMobile"
import MainMobile from "../components/MainMobile"
import FooterMobile from "../components/FooterMobile"

const Home = () => {
    return (
        <div>
            <Navbar />
            <NavbarMobile />
            <Clarifion />
            <ClarifionMobile />
            <Hero />
            <Steps />
            <StepsMobile />
            <Main />
            <MainMobile />
            <Footer />
            <FooterMobile />
        </div>
    )
}
export default Home