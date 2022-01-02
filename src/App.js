import logo from './logo.svg';
import { Navigate, Route, useNavigate, Location, useLocation } from 'react-router-dom';
import './App.css';
import Book from './Book';
import BookInfo from './BookInfo';

import {
  Routes
} from "react-router-dom";


function App() {
  let location= useLocation();
  let navigate = useNavigate();
  const onBookClick = () => {
    console.log("clicked");
  // navigate("/BookInfo", { replace: true });
  return <Navigate to="/BookInfo" state={{ from: location }} />

  }
  return (
    <div className="App">
 <div onClick={onBookClick}>
        <Book />
      </div>
      <Routes>
        <Route path="/BookInfo" element={<BookInfo />} />
        <Route path="/Book" element={<Book />} />
      </Routes>
     
    </div>

  );
}

export default App;
