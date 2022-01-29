import React, { useEffect, useState } from "react";
import BooksStatus from "./BooksStatus";
import Book from "./Book";
import BookInfo from "./BookInfo";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FilterBorrowedBooks from "./FilterBorrowedBooks";



const Books = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

    const [books, setBooks] = useState([]);
    const [newTopic, setNewTopic] = useState('Android');
    const [shouldModalOpen, setShouldModalOpen] = useState();

  const getBooksStatus = () => {
    shouldModalOpen(true);
  };

    useEffect(() => {
        fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${newTopic}&&maxResults=40`
        )
            .then((res) => res.json())
            .then(res => {
                setBooks(res.items.map(book => ({ ...book, status: 'free' })))
                setShouldModalOpen(false)
            });
    }, []);

  return (
    <>
      <FilterBorrowedBooks books={books} setBooks={setBooks}/>
      <div onClick={getBooksStatus}>
        {shouldModalOpen && <BooksStatus />}
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
                <Book book={book} />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
export default Books