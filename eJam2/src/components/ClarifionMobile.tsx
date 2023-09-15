import React from 'react'
import clarifion from "../assets/clarifion.png"
import mcAfee from "../assets/mcAfee.png"
import norton from "../assets/norton.png"

const ClarifionMobile = () => {
    return (
        <div className="flex md:hidden w-screen justify-between px-4 p-4">
            <div className='h-10 w-20'>
                <img src={clarifion} alt="Logo" />
            </div>
            <div className="flex gap-2 ">
                <img src={mcAfee} alt="Logo" className="h-4" />
                <img src={norton} alt="Logo" className='h-4' />
            </div>
        </div>
    )
}

export default ClarifionMobile