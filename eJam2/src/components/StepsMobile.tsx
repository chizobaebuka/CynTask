import React from "react";
import step from "../assets/Ellipse.png";
import step3 from "../assets/step3.png"
import step4 from "../assets/step4.png"

const StepsMobile = () => {
    return (
        <div className="px-4 flex md:hidden justify-between mt-4 text-xs">
            <div className="flex flex-col justify-center items-center gap-2">
                <img src={step} alt="check" className="w-8 h-8" />
                <p>Cart Review</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <img src={step} alt="check" className="w-8 h-8" />
                <p>Checkout</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <img src={step3} alt="check" className="w-8 h-8" />
                <p className="font-bold">Special Offer</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <img src={step4} alt="check" className="w-8 h-8" />
                <p>Confirmation</p>
            </div>
        </div>
    );
};

export default StepsMobile;
