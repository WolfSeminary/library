import logo from './logo.svg';
import './App.css';
import Book from './Book';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Book book={book}></Book>

      </header>
    </div>
  );
}

export default App;
