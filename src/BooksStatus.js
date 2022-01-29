import Button from "@mui/material/Button";
import { useState } from "react";

const BooksStatus = (book) => {
  const [bookStatus,setBookStatus] = useState({id:book.id,status:"free"})
  return (
    <>
      <Button variant="outlined">Library Status</Button>
    </>
  );
};
export default BooksStatus;
