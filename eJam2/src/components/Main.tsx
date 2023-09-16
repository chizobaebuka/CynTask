import React from "react"
import image4 from "../assets/image 4.png"
import Img from "../assets/Img.png"
import star from "../assets/rating.png"
import dot from "../assets/dot.png"
import tick from "../assets/tick-circle.png"
import divide from "../assets/divide.png"
import rightArrow from "../assets/rightArrow.png"
import lock from "../assets/lock.png"
import cards from "../assets/cards.png"
import stamp from "../assets/stamp.png"
import pic from "../assets/image.png"
import rating from "../assets/Stars.png"
import verify from "../assets/verify 1.png"

const Main = () => {
    return (
        <div className="hidden md:grid grid-cols-2 mt-3 bg-[#FAFAFA] mx-24 border-r-8">
            <div className="p-8 border-r-2">
                <img src={image4} alt="" />
                <div className="bg-[#FFFFFF] mt-4 p-4 rounded-lg">
                    <div className="flex flex-row gap-4">
                        <img src={pic} alt="" />
                        <div className="flex flex-col ">
                            <div className="flex flex-row mb-1">
                                <img src={rating} alt="" />
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-[#333333]">Ken T.</p>
                                <img src={verify} alt="" />
                                <p className="text-[#5BB59A] text-xs ">Verified Customer</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-base text-[##4D5254] mt-4">
                            “As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-6 gap-4">
                <div className="flex flex-col capitalize">
                    <p className="text-3xl"><span className="text-[#2C7EF8]">ONE TIME ONLY</span> special price for 6 <br /> extra Clarifion for only <span className="text-[#2C7EF8]">$14 each</span> <br /> ($84.00 total!)</p>
                </div>
                <div className="flex gap-6 mt-4">
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

                <div className="mt-4 ">
                    <div className="flex gap-4 flex-row items-center mb-4">
                        <img src={tick} alt="" />
                        <p className="text-base text-[#4D5254]">Negative Ion Technology may <span className="text-[#4D5254] font-bold">help with allergens</span></p>
                    </div>
                    <div className="flex gap-4 flex-row items-center mb-4">
                        <img src={tick} alt="" />
                        <p className="text-base text-[#4D5254]">Designed for <span className="text-[#4D5254] font-bold">air rejuvenation</span></p>
                    </div>
                    <div className="flex gap-4 flex-row items-center mb-4">
                        <img src={tick} alt="" />
                        <p className="text-base text-[#4D5254]"><span className="text-[#4D5254] font-bold">Perfect for every room</span> in all types of places.</p>
                    </div>
                </div>

                <div className="flex flex-row bg-[#EDF3FD] h-10 items-center gap-4 rounded-lg mb-2">
                    <img src={divide} alt="" className="ml-4" />
                    <p>Save <span className="text-[#2C7EF8]">53%</span> and get <span className="text-[#2C7EF8]">6 extra Clarifision</span> for only <span className="text-[#2C7EF8]">$14 each</span>.</p>
                </div>

                <div className="flex flex-row items-center justify-center rounded-3xl bg-[#59AE43] space-x-5 h-12">
                    <p className="flex justify-center uppercase text-white text-l">Yes - Claim my discount</p>
                    <img src={rightArrow} alt="" />
                </div>
                <div className="border border-gray-300 rounded p-2 flex items-center gap-4">
                    <div className="text-gray-700 font-normal text-xs">Free Shipping</div>
                    <div className="border-l border-gray-300 h-4"></div>
                    <div className="flex items-center space-x-2">
                        <img className="w-3 h-3" alt="Lock" src={lock} />
                        <div className="text-gray-700 font-normal text-xs">
                            Secure 256-bit Ssl Encryption.
                        </div>
                    </div>
                    <div className="border-l border-gray-300 h-4"></div>
                    <img className="" alt="Frame" src={cards} />
                </div>
                <div className="">
                    <p className="flex items-center justify-center uppercase text-[#f82c2c] underline">No Thanks, I do not want this.</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                    <img src={stamp} alt="" />
                    <div>
                        <p className="text-[#4D5254] text-xs">If you are not completely thrilled with your Clarifion - We <br /> have a 30 day satisfaction guarantee. Please refer to our <br /> return policy at the bottom of the page for more details. <br /> Happy Shopping!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main