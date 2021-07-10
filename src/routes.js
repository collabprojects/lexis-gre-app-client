import {BrowserRouter, Route, Switch} from 'react-router-dom';
import FlashCard from './components/flash_card';
import WordForm from './components/word_form';
import Home from './components/home';
import Words from './components/words';

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
        <>
        <Route exact path="/" component={Words}/>
        <Route path="/flash_cards" component={FlashCard}/>
        <Route path="/create_word_form" component={WordForm}/>
        </>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;