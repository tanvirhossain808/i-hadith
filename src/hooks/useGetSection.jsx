import { useContext, useEffect, useState } from "react";
import { dataProvider } from "../store/Data";


const useGetSection = () => {
    const { setData } = useContext(dataProvider)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        function getData() {
            fetch("http://localhost:5000/section")
                .then(res => res.json())
                .then(data => {
                    setIsLoading(false)

                    setData((pre) => {
                        return {
                            ...pre,
                            section: data.map((section) => {
                                return section
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

export default useGetSection;