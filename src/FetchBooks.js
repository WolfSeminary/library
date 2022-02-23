import { Button, TextField } from '@mui/material';

function FetchBooks({ onChange }) {
    return (
        <>
            <Button variant="outlined">Fetch Books</Button>
            <TextField style={{ margin: 5 }} label="enter a subject for book" variant="outlined" onChange={(e) => onChange(e.target.value)} />
        </>
    )
}
export default FetchBooks;