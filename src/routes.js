import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import WordCount from './components/word_count';
import WordForm from './components/word_form';
import WordFormUpdate from './components/word_form_update';
import WordCard from './components/word_cards';
import FlashCard from './components/flash_card';
import FloatButton from './shared/floating_button';
import NotFound from './shared/not_found';
import SingleCard from './components/single_card';



const Routes = () => {
    return (
        <div>
        <Switch>
        <Route exact path="/" component={WordCard}/>
        <Route path="/word_count" component={withRouter(WordCount)}/>
        <Route path="/create_word_form" component={WordForm}/>
        <Route path="/update_word_form/:id"  component={withRouter(WordFormUpdate)}/>
        <Route path="/view_word/:id"  component={withRouter(SingleCard)}/>
        <Route path="/flash_card/generate_words=:number"  component={FlashCard}/>
        <Route to="/404" component={NotFound}/>
        <Redirect to="/404"/>
        </Switch>
        </div>
    )
}

export default Routes;