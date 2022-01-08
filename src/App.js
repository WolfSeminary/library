import logo from './logo.svg';
import { Navigate, Route,Routes, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Book from './Book';
import BookInfo from './BookInfo';

function App() {
  let navigate = useNavigate();
  const onBookClick = () => {
    console.log("clicked");
  navigate("/BookInfo", { replace: true });
  }
  
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
