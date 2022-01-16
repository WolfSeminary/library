import { useEffect } from "react";

export default Books = () => {

    useEffect(() => {
        fetch("https://www.googleapis.com/books/v1/volumes?q=Android&&maxResults=40")
            .then((res) => res.json())
    }, [])

};
