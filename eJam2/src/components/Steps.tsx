import React from "react";
import step from "../assets/Ellipse.png";
import step3 from "../assets/step3.png"
import step4 from "../assets/step4.png"

const Steps = () => {
    return (
        <div className="flex justify-between px-24 mt-12">
            <div className="flex flex-row items-center text-xl gap-2">
                <img src={step} alt="" />
                <p>Step 1 : Cart Review</p>
            </div>
            <div className="flex flex-row items-center text-xl gap-2">
                <img src={step} alt="" />
                <p>Step 2 : Checkout</p>
            </div>
            <div className="flex flex-row items-center text-xl gap-2 font-bold">
                <img src={step3} alt="" />
                <p>Step 3 : Special Offer</p>
            </div>
            <div className="flex flex-row items-center text-xl gap-2">
                <img src={step4} alt="" />
                <p>Step 4 : Confirmation</p>
            </div>
        </div>
    )
}
export default Steps