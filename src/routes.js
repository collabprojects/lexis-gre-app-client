import {BrowserRouter, Route, Switch} from 'react-router-dom';
import FlashCard from './components/flash_card';
import WordForm from './components/word_form';
import Home from './components/home';
import Words from './components/words';
import WordFormUpdate from './components/word_form_update';
import WordCard from './components/word_cards';

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
        <>
        <Route exact path="/" component={Words}/>
        <Route path="/flash_cards" component={FlashCard}/>
        <Route path="/create_word_form" component={WordForm}/>
        <Route path="/update_word_form/:id"  component={WordFormUpdate}/>
        <Route path="/word_cards"  component={WordCard}/>

        </>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;