import { useEffect, useState } from "react";
import BooksStatus from './BooksStatus'

export default Books = () => {
    const [bokks, setBooks] = useState([])

    const getBooksStatus = () => {
    }

    useEffect(() => {
        fetch("https://www.googleapis.com/books/v1/volumes?q=Android&&maxResults=40")
            .then((res) => res.json()).then(setBooks(res))
    }, [])

    return (
        <>
            <div onClick={getBooksStatus}>
                <BooksStatus />
            </div>
        </>
    )
}
