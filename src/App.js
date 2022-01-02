import logo from './logo.svg';
import { Navigate, Route, useNavigate, Location, useLocation } from 'react-router-dom';
import './App.css';
import Book from './Book';
import BookInfo from './BookInfo';

import {
  Routes
} from "react-router-dom";
import BooksStatus from './BooksStatus';


function App() {
const getBooksStatus=()=>{
console.log("status");
}
  return (
    <div className="App">
      <div onClick={getBooksStatus} >
      <BooksStatus />
      </div>
      <Routes>
        <Route path="/BookInfo" element={<BookInfo />} />
        <Route path="/" element={<Book />} />
      </Routes>
     
    </div>

  );
}

export default App;
