import { createContext, useEffect, useState } from 'react';

export const BooksContext = createContext();

const booksUrl = 'https://in3.dev/knygos/';
const typeUrl = 'https://in3.dev/knygos/types/';



export const BooksProvider = ({children})_ => {
    
    const [books, setBooks] = useState(null);
    useEffect( => {
        axios.get(booksUrl)
        .then(res => {
            setBooks(res.data)
        }),

    }, []);

    
    return (
        <BooksContext.Provider value={{
            bla_bla: 1
        }}>
           {children}
        </BooksContext.Provider>
    )
}