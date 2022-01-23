import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function FilterBorrowedBooks() {
  return (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="Get only free books" />
      <FormControlLabel disabled control={<Switch />} label="All books" />
    </FormGroup>
  );
}