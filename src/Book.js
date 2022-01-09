import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import BookInfo from './BookInfo';

export default function Book({ book }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={""}
          alt="image book"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <BookInfo book={book}/>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* add name */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}