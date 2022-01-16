import { useEffect } from "react";

export default Books(() => {
    const [books,setBooks] = setState([]);
    useEffect(() => {
        fetch("https://www.googleapis.com/books/v1/volumes?q=Android&&maxResults=40")
            .then((res) => res.json()).then(setBooks(res))
    }, [])

});
