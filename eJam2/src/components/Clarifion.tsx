import React from "react";
import clarifion from "../assets/clarifion.png"
import mcAfee from "../assets/mcAfee.png"
import norton from "../assets/norton.png"

const Clarifion = () => {
    return (
        <div className=" px-4 sm:px-24 gap-4 flex justify-between mt-8 items-center ">
            <div className="h-4 w-24 sm:w-48 sm:h-8">
                <img src={clarifion} alt="" />
            </div>
            <div className="flex p-30 gap-6 h-4 sm:h-8">
                <div>
                    <img src={mcAfee} alt="" />
                </div>
                <div>
                    <img src={norton} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Clarifion;