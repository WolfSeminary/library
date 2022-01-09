import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function FetchBooks() {
    return (
        <>
            <Button variant="outlined">אחזר ספרים</Button>
            <TextField id="outlined-basic" label="enter subject" variant="outlined" />
        </>
    )
}
export default FetchBooks;