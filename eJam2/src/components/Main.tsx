import React from "react"
import image4 from "../assets/image 4.png"
import Img from "../assets/Img.png"
import star from "../assets/rating.png"
import dot from "../assets/dot.png"

const Main = () => {
    return (
        <div className="grid grid-cols-2 mt-3 bg-[#FAFAFA] px-24 border-r-8">
            <div className="p-8 border-r-2">
                <img src={image4} alt="" />
            </div>
            <div className="flex flex-col mt-6 gap-4">
                <div className="flex flex-col capitalize">
                    <p className="text-3xl"><span className="text-[#2C7EF8]">ONE TIME ONLY</span> special price for 6 <br /> extra Clarifion for only <span className="text-[#2C7EF8]">$14 each</span> <br /> ($84.00 total!)</p>
                </div>
                <div className="flex gap-6 mt-6">
                    <div className="">
                        <img src={Img} alt="" className="bg-[#2c7ef8]" />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row gap-40">
                            <p className="text-xl">Clarifion Air Ionizer</p>
                            <div className="flex gap-4">
                                <p className="text-[#969696] line-through">$180</p>
                                <p className="text-[#2C7EF8] font-semibold text-xl">$84</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 mt-3">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                        <div className="flex flex-row gap-2 mt-3 items-center">
                            <div>
                                <img src={dot} alt="" />
                            </div>
                            <p>12 left in Stock</p>
                        </div>
                        <div>
                            <p className="text-[##4D5254] mt-3">Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main