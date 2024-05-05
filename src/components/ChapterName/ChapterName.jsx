/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const ChapterName = ({ isActive, setIsActive }) => {

    return (
        <div className={`flex items-center justify-center w-[175px] ${isActive.chapter && "bg-[#2B9E76] text-[#FFFFFF] rounded-tr-2xl"} h-full overflow-hidden`} onClick={() => setIsActive({
            book: false,
            chapter: true
        })}>
            {/* <div className="flex justify-center w-[175px]" onClick={() => setIsActive({
            chapter: true,
            book: false
        })}> */}
            <p className="text-xl ">অধ্যায়</p>
        </div>
    );
};

export default ChapterName;