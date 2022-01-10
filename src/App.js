import {  Route,Routes } from 'react-router-dom';
import './App.css';
import Book from './Book';
import BookInfo from './BookInfo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/BookInfo" element={<BookInfo />} />
        <Route path="/" element={<Book />} />
      </Routes>
    </div>
  );
}

export default App;
