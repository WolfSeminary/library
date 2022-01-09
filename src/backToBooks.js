import * as React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Stack from '@mui/material/Stack';

export default function BackToBooks() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<ArrowBackIcon />}>
      Back to Books
      </Button>
    </Stack>
  );
}
