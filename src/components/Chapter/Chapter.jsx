/* eslint-disable react/prop-types */
import { useState } from "react";


const Chapter = ({ range, number, title, isActive }) => {

    console.log(isActive, 'df');
    const [isRowActive, setIsRowAcitve] = useState(false)
    const [isHover, setIsHover] = useState(false)
    return (
        <div className={`flex items-center gap-2 h-[100px] rounded-xl   w-full pl-3 ${(isActive || isHover) && "bg-[#EBFCF6]"} cursor-pointer`} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>

            <div className="relative" >
                <h3 className={`text-xl ${(isActive || isHover) ? "text-white" : "text - gray - 400"}  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:text-lg font-medium`}>{number}</h3>
                <svg className={`${(isActive || isHover) ? "fill-[#2B9E76]" : "fill-[#f1f5f4]"}`} width="50" height="50" viewBox="0 0 56 62" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <path d="M22.375 3.11362C25.8558 1.104 30.1442 1.104 33.625 3.11362L49.3378 12.1854C52.8186 14.195 54.9628 17.909 54.9628 21.9282V40.0718C54.9628 44.091 52.8186 47.805 49.3378 49.8146L33.625 58.8864C30.1442 60.896 25.8558 60.896 22.375 58.8864L6.66219 49.8146C3.18143 47.805 1.03719 44.091 1.03719 40.0718V21.9282C1.03719 17.909 3.18143 14.195 6.66219 12.1854L22.375 3.11362Z" strokeWidth="1.5"></path>

                </svg>
            </div>
            <div className="flex flex-col">
                <div>
                    <h4>
                        {title}
                    </h4>
                </div>
                <div className="text-[#40404099]">
                    হাদিসের রেঞ্জ: {range}
                </div>

            </div>

        </div >
    );
};

export default Chapter;