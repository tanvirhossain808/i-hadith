
import { useContext, useEffect, useState } from "react";
import { dataProvider } from "../store/Data";


const useGetAllHadith = () => {
    const { setData } = useContext(dataProvider)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        function getData() {
            fetch("http://localhost:5000/hadith")
                .then(res => res.json())
                .then(data => {
                    setIsLoading(false)

                    setData((pre) => {
                        return {
                            ...pre,
                            hadith: data.map((hadith) => hadith)
                        }
                    })

                })
        }
        getData()
        return getData
    }, [])
    return { isLoading }

};

export default useGetAllHadith;