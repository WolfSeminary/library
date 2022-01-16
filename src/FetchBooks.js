import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function FetchBooks() {
    fetchDifferentBooks = () => { }
    return (
        <>
            <Button variant="outlined" onClick={fetchDifferentBooks}>Fetch Books</Button>
            <TextField id="outlined-basic" label="enter subject" variant="outlined" />
        </>
    )
}
export default FetchBooks;