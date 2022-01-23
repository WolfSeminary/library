import React, { useEffect, useState } from "react";
import BooksStatus from "./BooksStatus";
import BookInfo from "./BookInfo";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MainBar from "./AppBar ";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Books() {
  const [books, setBooks] = useState([]);
  const [serchTerm, setSearchTerm] = useState('')
  const getBooksStatus = () => { };
  useEffect(() => {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=Android&&maxResults=40"
    )
      .then((res) => res.json())
      .then(res =>
        {
          debugger
          setBooks(res.items)

        } );
  }, []);

  return (
    <>
      <MainBar serchTerm={serchTerm} setSearchTerm={setSearchTerm} />
      <div onClick={getBooksStatus}>
        <BooksStatus />
      </div>
      <Box sx={{ justifyContent: "center" }}>
        <Grid
          container
          justifyContent="center"
          spacing={{ xs: 1, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 10 }}
        >
          {books.map((book, index) => (
            <Grid item xs={2} sm={2.5} md={4} key={index}>
              <Item>
                <BookInfo book={book} />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
