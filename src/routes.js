import {Route, Switch, withRouter} from 'react-router-dom';
import WordCount from './components/word_count';
import WordForm from './components/word_form';
import WordFormUpdate from './components/word_form_update';
import WordCard from './components/word_cards';
import FlashCard from './components/flash_card';
import FloatButton from './shared/floating_button';



const Routes = () => {
    return (
        <div>
        <Route exact path="/" component={WordCard}/>
        <Switch>
        <Route path="/word_count" component={withRouter(WordCount)}/>
        <Route path="/create_word_form" component={WordForm,FloatButton}/>
        <Route exact path="/update_word_form/:id"  component={withRouter(WordFormUpdate)}/>
        <Route path="/flash_card/generate_words=:number"  component={FlashCard}/>
        </Switch>
        </div>
    )
}

export default Routes;