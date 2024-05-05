/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";

export const dataProvider = createContext({})
const values = {
    books: [],
    chapter: [],
    hadith: []
}


const Data = ({ children }) => {
    const [data, setData] = useState(values)

    return (
        <dataProvider.Provider value={{ data, setData }}>
            {children}
        </dataProvider.Provider>
    );
};

export default Data;