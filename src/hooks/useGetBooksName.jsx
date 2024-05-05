import { useContext, useEffect, useState } from "react";
import { dataProvider } from "../store/Data";


const useGetBooksName = () => {
    const { setData } = useContext(dataProvider)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        function getData() {
            fetch("http://localhost:5000/")
                .then(res => res.json())
                .then(data => {
                    setIsLoading(false)

                    setData((pre) => {
                        return {
                            ...pre,
                            books: data.map((book) => {
                                if (book.id === 1) return { ...book, isActive: true }
                                else {
                                    return { ...book, isActive: false }
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

export default useGetBooksName;