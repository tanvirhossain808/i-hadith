import BookName from "../BookName/BookName";
import ChapterName from "../ChapterName/ChapterName";
import { useContext, useState } from "react";
import SearchBar from "../Searchbar/Searchbar";
import { dataProvider } from "../../store/Data";
import Book from "../Book/Book";
import Chapter from "../Chapter/Chapter";

const Suchipatra = () => {
    const [isActive, setIsActive] = useState({
        book: true,
        chapter: false
    })
    const { data: { books, chapter } } = useContext(dataProvider)

    return (
        <div className="flex  justify-between flex-col">
            <div className="buttonContainer flex items-center border-b  border-gray-200 justify-center w-full h-[55px]">
                <BookName isActive={isActive} setIsActive={setIsActive} />
                <ChapterName isActive={isActive} setIsActive={setIsActive} />
            </div>
            <div className="p-3">
                <SearchBar bg={"bg-[#F2F4F6]"} w={"w-[320px]"} h={"h-[50px]"} />
            </div>
            <div className="scrollOption px-3 py-3">
                {
                    isActive.book ? books.map((book) => <Book id={book.id} isActive={book.isActive} code={book.abvr_code} key={book.id} title={book.title} hadishNumber={book.number_of_hadis} />) : chapter.map((chapter) => <Chapter title={chapter.title} range={chapter.hadis_range} number={chapter.number} key={chapter.id} id={chapter.id} />)
                }

            </div>



        </div>
    );
};

export default Suchipatra;