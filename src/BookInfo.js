import { Typography, Card, CardContent } from '@mui/material';
import BackToBooks from './BackToBooks';
import Books from './Books';

export default function BookInfo({ book }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <BackToBooks />
      <Typography>
        Book Info
        </Typography>
      <CardContent>
        <h2>{book.title}</h2>
        <p><b>Authors:</b> {book.authors}</p>
        <p><b>Publisher:</b>{book.publisher}</p>
        <p><b>Date of publication:</b> {book.publishedDate}</p>
        <p><b>Description:</b> {book.description}</p>
        <p><b>Number of pages: </b>{book.pageCount}</p>
        <p><b>Language:</b> {book.language}</p>
      </CardContent>
    </Card>
  );
}
