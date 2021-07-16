import {Route, Switch} from 'react-router-dom';
import WordCount from './components/word_count';
import WordForm from './components/word_form';
import WordFormUpdate from './components/word_form_update';
import WordCard from './components/word_cards';
import FlashCard from './components/flash_card';

const Routes = () => {
    return (
        <div>
        <Route exact path="/" component={WordCard}/>
        <Switch>
        <Route path="/word_count" component={WordCount}/>
        <Route path="/create_word_form" component={WordForm}/>
        <Route path="/update_word_form/:id"  component={WordFormUpdate}/>
        <Route path="/flash_card"  component={FlashCard}/>
        </Switch>
        </div>
    )
}

export default Routes;