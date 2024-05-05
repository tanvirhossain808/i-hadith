/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";



const Nav = ({ img, hoverImg, activeImg, isActive, name }) => {
    const [isHover, setIsHover] = useState(
        false
    )
    return (
        <div>
            {isActive && <img className={`${isActive && "bg-[#2B9E76]"} ${!isActive && "hover:bg-[#f8f8f9]"} cursor-pointer rounded-lg md-max:p-2 md-max:w-9 p-4`} src={name === "support" ? img : activeImg} alt="" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} />}

            {!isActive && < img className={`${isActive && "bg-[#2B9E76]"} ${!isActive && "hover:bg-[#f8f8f9]"} cursor-pointer rounded-lg md-max:p-2 md-max:w-9 p-4`} src={!isActive && isHover ? hoverImg : img} alt="" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} />}
        </div>
    );
};

export default Nav;