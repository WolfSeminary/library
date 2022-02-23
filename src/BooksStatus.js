import Button from "@mui/material/Button";

const BooksStatus = ({onClick}) => {
  return (
    <>
      <Button variant="outlined" onClick={onClick}>Library Status</Button>
    </>
  );
};
export default BooksStatus;
