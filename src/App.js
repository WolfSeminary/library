import { Route, Routes } from 'react-router-dom';
import './App.css';
import Books from './books';
import BookInfo from './BookInfo';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/BookInfo" element={<BookInfo />} />
        <Route path="/" element={<Books />} />
      </Routes>
    </div>
  );
}

export default App;
