import { useContext, useEffect, useState } from "react";
import { dataProvider } from "../store/Data";


const useGetChapterName = (name = 1) => {
    const { setData } = useContext(dataProvider)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        function getData() {
            fetch(`http://localhost:5000/chapters?bookId=${name}`)
                .then(res => res.json())
                .then(data => {
                    setIsLoading(false)

                    setData((pre) => {
                        return {
                            ...pre,
                            chapter: data.map((book) => {
                                return {
                                    ...book,

                                    isActive: book.id === 1
                                }
                            })
                        }
                    })

                })
        }
        getData()
        return getData
    }, [])
    return { isLoading }

};

export default useGetChapterName;