import React from "react"
import Navbar from "../components/Navbar"
import Clarifion from "../components/Clarifion"
import Hero from "../components/Hero"
import Steps from "../components/Steps"
import Main from '../components/Main';
import Footer from "../components/Footer"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Clarifion />
            <Hero />
            <Steps />
            <Main />
            <Footer />
        </div>
    )
}
export default Home