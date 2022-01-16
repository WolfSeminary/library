import * as React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";

export default function BackToBooks() {
  let navigate = useNavigate();
  
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" onClick={()=>navigate(-1)} startIcon={<ArrowBackIcon />}>
      Back to Books
      </Button>
    </Stack>
  );
}
