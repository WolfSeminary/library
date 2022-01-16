import { useEffect, useState } from "react";
import NoBook from "./NoBooks";

export default Books(() => {
    useEffect(() => {
        fetch("https://www.googleapis.com/books/v1/volumes?q=Android&&maxResults=40")
            .then((res) => res.json)
    }, [])
    return (
        <>
            {book.length == 0 && <NoBook />}
        </>)
});
