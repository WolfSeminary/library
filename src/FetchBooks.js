import { useRef } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
function FetchBooks() {
    const refSubject = useRef(null);
    function changeSubject() {
        console.log(refSubject.current.value);
    }
    return (
        <>
         <Button variant="outlined"onClick={changeSubject}>אחזר ספרים</Button>
         <TextField id="outlined-basic" label="enter subject" variant="outlined" inputRef={refSubject}/>

        </>
    )
}
export default FetchBooks;