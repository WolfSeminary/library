import { Route, Routes } from 'react-router-dom';
import './App.css';
import Book from './Book';
import BookInfo from './BookInfo';
import logo from "./logo.svg";
import "./App.css";
import BooksStatusModal from './BooksStatusModal';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/BookInfo" element={<BookInfo />} />
        <Route path="/" element={<Book />} />
      </Routes>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Library</h1>
      </header>
    </div>
  );
}

export default App;
