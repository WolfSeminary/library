import {  useNavigate } from 'react-router-dom';
import  React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Book ({book}) {
    let navigate = useNavigate();
    const onBookClick = () => {
        console.log("clicked");
        navigate("/BookInfo", { replace: true });
        return (
            <h1 onClick={onBookClick}>book</h1>
        )}
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <CardMedia
          component="img"
          height="140"
          image={book.image}
          alt="image book"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {/* add info */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {/* add name */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}