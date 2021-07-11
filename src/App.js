import FlashCard from './components/flash_card';
import Words from './components/words';
import WordForm from './components/word_form'
import './App.css';
import Routes from './routes';
import Home from './components/home';
import {BrowserRouter, Link} from 'react-router-dom'
import WordCard from './components/word_cards'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <nav>
    <div class="nav-wrapper grey darken-4">
      <a href="#" class="brand-logo" style={{paddingLeft:"10px"}}><img src="" ></img>LEXIS</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/">View All Words</Link></li>
        <li><Link to="/flash_cards">Revise Words</Link></li>
        <li><Link to="/create_word_form">Add a New Word</Link></li>
        <li><Link to="/update_word_form">Update Word</Link></li>
      </ul>
    </div>
  </nav>
    </BrowserRouter>
    <Routes/>
    </div>
  );
}

export default App;
