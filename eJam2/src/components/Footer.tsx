import React from "react"
import line from "../assets/Line 2.png"
import lock1 from "../assets/lock1.png"

const Footer = () => {
    return (
        <div className="hidden md:flex px-24 bg-[#252F3D] h-24 flex flex-row items-center justify-between">
            <div className="flex flex-row gap-4 ">
                <p className="text-lg text-[#FFFFFF]">Copyright (c) 2023</p>
                <img src={line} alt="" />
                <p className="text-lg text-[#FFFFFF]">Clarifionsupport@clarifion.com</p>
            </div>
            <div className="flex flex-row items-center gap-4 ">
                <img src={lock1} alt="" className="text-[#FFFFFF] " />
                <p className="text-[#FFFFFF] text-lg capitalize ">Secure 256-bit SSL encryption.</p>
            </div>
        </div>
    )
}
export default Footer