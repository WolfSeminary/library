import React, { useEffect, useState } from "react";
import BooksStatus from "./BooksStatus";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Box, Paper, Grid } from "@mui/material";
import FilterBorrowedBooks from "./FilterBorrowedBooks";
import Book from "./Book";
import FetchBooks from "./FetchBooks";
import AppBar from "./AppBar";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Books() {
  const [books, setBooks] = useState([]);
  const [shouldModalOpen, setShouldModalOpen] = useState();
  const [freeBooks, setFreeBooks] = useState([])
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [differentTopic, setDifferentTopic] = useState('Android');

  const onTopicChange = (params) => {
    setDifferentTopic(params);
  }
  const onFilterChange = (state) => {
    setLibraryStatus(!libraryStatus)
  }

  const getBooksStatus = () => {
    setShouldModalOpen(true);
  };

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${differentTopic}&&maxResults=40`
    )
      .then((res) => res.json())
      .then(res => {
        setBooks(res.items.map(book => ({ ...book, status: 'free' })))
        // setFreeBooks(books.filter(item=>item.status==="free"))
        setFreeBooks(books);
        setShouldModalOpen(false)
      });
  }, []);

  return (
    <>
      <AppBar />
      <BooksStatus onClick={getBooksStatus} />
      <FetchBooks onChange={onTopicChange} />
      <FilterBorrowedBooks onChange={onFilterChange} />
      {shouldModalOpen && <div>books status modal</div>}
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
                <Book info={book} />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
