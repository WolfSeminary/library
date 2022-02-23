import { FormGroup, FormControlLabel, Switch } from '@mui/material';

export default function FilterBorrowedBooks({ onChange }) {
  return (
    <FormGroup>
      <FormControlLabel onChange={() => onChange(false)} control={<Switch defaultChecked />} label="Get only free books" />
    </FormGroup>
  );
}
