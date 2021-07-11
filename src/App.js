import FlashCard from './components/flash_card';
import Words from './components/words';
import WordForm from './components/word_form'
import WordFormUpdate from './components/word_form_update'
import './App.css';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom'


import NavBar from './components/navBar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
