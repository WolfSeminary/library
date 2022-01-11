import Book from "./Book"
import React, { useState } from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
const Books = ({books}) => {
    return (
        <Box sx={{ justifyContent: "center" }}>
          <Grid container justifyContent="center" spacing={{ xs: 1, md: 3 }} columns={{ xs: 2, sm: 8, md: 10 }}>
            {books.map((book, index) => (
              <Grid item xs={2} sm={2.5} md={4} key={index}>
                <Item><Book book={book}/></Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      );
}
export default Books;
