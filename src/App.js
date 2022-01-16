import {  Route,Routes } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import book from './Book';
import Bookone from './Book';
=======
import Book from './Book';
import BookInfo from './BookInfo';
import logo from "./logo.svg";
import "./App.css";
>>>>>>> origin/master

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
  <Bookone/>
=======
      <Routes>
        <Route path="/BookInfo" element={<BookInfo />} />
        <Route path="/" element={<Book />} />
      </Routes>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Library</h1>
      </header>
>>>>>>> origin/master
    </div>
  );
}

export default App;
