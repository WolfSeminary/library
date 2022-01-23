import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function FetchBooks() {
    const [differentTopic, setDifferentTopic] = useState('');
    const onTopicChange = (params) => {
        setDifferentTopic(params);
    }
    return (
        <>
            <Button variant="outlined">Fetch Books</Button>
            <TextField style={{ margin: 5 }} label="enter a subject for book" variant="outlined" onChange={(e) => onTopicChange(e.target.value)} />
        </>
    )
}
export default FetchBooks;