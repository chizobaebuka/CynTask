// import React from "react"
// import { Icon } from '@iconify/react';

// const Navbar = () => {
//     return (
//         <div className="bg-[#252F3D] text-[#FFFFFF] sm:flex hidden sm:justify-between flex p-4 px-24 max-w-sm sm:max-w-full">
//             <div className="flex items-center gap-2 text-sm ">
//                 <Icon icon="fluent:checkmark-starburst-20-regular" className="w-6 h-6"/>
//                 <p>30-DAY SATISFACTION GUARANTEE</p>
//             </div>
//             <div className="flex items-center uppercase gap-2 text-sm">
//                 <Icon icon="ph:truck-light" className="w-6 h-6" />
//                 <p>Free delivery on orders over $40.00</p>
//             </div>
//             <div className="flex items-center uppercase gap-2 text-sm">
//                 <Icon icon="mdi:cards-heart-outline" className="w-6 h-6" />
//                 <p>50.000+ HAPPY CUSTOMERS</p>
//             </div>
//             <div className="flex items-center uppercase gap-2 text-sm">
//                 <Icon icon="fluent:arrow-sync-checkmark-20-regular" className="w-6 h-6" />
//                 <p>100% Money Back Guarantee</p>
//             </div>
//         </div>
//     )
// }
// export default Navbar

import React from "react";
import { Icon } from '@iconify/react';

const Navbar = () => {
    return (
        <div className="bg-[#252F3D] text-[#FFFFFF] sm:flex hidden sm:justify-between flex p-4 px-24 max-w-full">
            <div className="flex items-center gap-2 text-xs sm:text-sm">
                <Icon icon="fluent:checkmark-starburst-20-regular" className="w-4 h-4 sm:w-6 sm:h-6"/>
                <p className="text-xs sm:text-sm">30-DAY SATISFACTION GUARANTEE</p>
            </div>
            <div className="flex items-center uppercase gap-2 text-xs sm:text-sm">
                <Icon icon="ph:truck-light" className="w-4 h-4 sm:w-6 sm:h-6" />
                <p className="text-xs sm:text-sm">Free delivery on orders over $40.00</p>
            </div>
            <div className="flex items-center uppercase gap-2 text-xs sm:text-sm">
                <Icon icon="mdi:cards-heart-outline" className="w-4 h-4 sm:w-6 sm:h-6" />
                <p className="text-xs sm:text-sm">50.000+ HAPPY CUSTOMERS</p>
            </div>
            <div className="flex items-center uppercase gap-2 text-xs sm:text-sm">
                <Icon icon="fluent:arrow-sync-checkmark-20-regular" className="w-4 h-4 sm:w-6 sm:h-6" />
                <p className="text-xs sm:text-sm">100% Money Back Guarantee</p>
            </div>
        </div>
    )
}

export default Navbar;
