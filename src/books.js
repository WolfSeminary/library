import { useEffect, useState } from "react";

export default books(() => {
const [books,setBooks]= useState()
    useEffect(() => {
        fetch("https://www.googleapis.com/books/v1/volumes?q=Android&&maxResults=40")
            .then((res) => res.json(),
            setBooks(res))
    }, [])

});
