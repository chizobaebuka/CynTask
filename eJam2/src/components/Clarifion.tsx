import React from "react";
import clarifion from "../assets/clarifion.png"
import mcAfee from "../assets/mcAfee.png"
import norton from "../assets/norton.png"

const Clarifion = () => {
    return (
        <div className=" px-24 flex justify-between mt-8">
            <div className="">
                <img src={clarifion} alt="" />
            </div>
            <div className="flex p-30 gap-6">
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