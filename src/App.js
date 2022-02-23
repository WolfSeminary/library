import { Route, Routes } from 'react-router-dom';
import './App.css';
import Books from './Books';
import BookInfo from './BookInfo';
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/BookInfo" element={<BookInfo />} />
        <Route path="/" element={<Books />} />
      </Routes>
    </div>
  );
}


