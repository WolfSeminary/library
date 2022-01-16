import { useEffect } from "react";
import BooksStatus from './BooksStatus'
export default Books(() => {
    useEffect(() => {
        fetch("https://www.googleapis.com/books/v1/volumes?q=Android&&maxResults=40")
            .then((res) => res.json()).then(setBooks(res))
    }, [])
    const getBooksStatus = () => {
    }
    return (
        <>
            <div onClick={getBooksStatus}>
                <BooksStatus />
            </div>
        </>
    )
});
