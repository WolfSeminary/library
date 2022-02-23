import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Stack, Button } from '@mui/material';

export default function BackToBooks() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<ArrowBackIcon />}>
        Back to Books
      </Button>
    </Stack>
  );
}
