import BookName from "../BookName/BookName";
import ChapterName from "../ChapterName/ChapterName";
import { useState } from "react";
import SearchBar from "../Searchbar/Searchbar";

const Suchipatra = () => {
    const [isActive, setIsActive] = useState({
        book: true,
        chapter: false
    })
    return (
        <div className="flex items-center justify-between flex-col">
            <div className="buttonContainer flex items-center border-b  border-gray-200 justify-center w-full h-[55px]">
                <BookName isActive={isActive} setIsActive={setIsActive} />
                <ChapterName isActive={isActive} setIsActive={setIsActive} />
            </div>
            <div className="p-3">
                <SearchBar bg={"bg-[#F2F4F6]"} w={"w-[320px]"} h={"h-[50px]"} />
            </div>




        </div>
    );
};

export default Suchipatra;