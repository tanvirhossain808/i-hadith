/* eslint-disable react/prop-types */


const BookName = ({ isActive, setIsActive }) => {
    return (
        <div className={` flex items-center justify-center w-[175px] ${isActive.book && "bg-[#2B9E76] text-[#FFFFFF] rounded-tl-2xl"} h-full 
        `} onClick={() => setIsActive({
            book: true,
            chapter: false
        })}>
            <p className="text-xl ">বই</p>
        </div>
    );
};

export default BookName;