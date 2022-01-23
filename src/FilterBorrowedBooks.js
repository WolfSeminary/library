import React, { useEffect, useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function FilterBorrowedBooks({ books,setBooks }) {
  const [booksStatus, setBooksStatus] = useState(books)
  const onFilterChange = (state) => {
    if (state === 1) {
      setBooksStatus(books)
    }
    else {
      setBooksStatus(books.filter(b => b.free))
    }
  }

  useEffect(() => {setBooks(booksStatus)}, [booksStatus]);
  
  return (
    <FormGroup>
      <FormControlLabel onChange={() => onFilterChange(1)} control={<Switch defaultChecked />} label="Get only free books" />
      <FormControlLabel onChange={() => onFilterChange(2)} disabled control={<Switch />} label="All books" />
    </FormGroup>
  );
}