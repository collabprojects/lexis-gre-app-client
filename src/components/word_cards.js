import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Loading from '../shared/loading';
import {withRouter} from 'react-router-dom';

class WordCard extends React.Component {
    state = {
        words: null,
        itemsToUse: []
    }

    componentDidMount() {
        fetch('https://lexis-gre-app-server.herokuapp.com/words/').then((res) => {
            if (res.ok) {
                return res.json()
            }
        }).then((data) => {
            this.setState({
                words: data,
                itemsToUse: data
            })
        })
    }

    searchHandler = (e) => {
        let searchQuery = e.target.value.toLowerCase()
        let displayedContacts = this.state.words.filter((el) => {
            let searchValue = el.word.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        })
        this.setState({
            itemsToUse: displayedContacts
        })
    }



    delete = (id) =>{
        fetch('https://lexis-gre-app-server.herokuapp.com/word/' + id, {
            method: 'DELETE'
        }).then((res) => {
            if (res.status === 204){
                window.M.toast({html: 'Word successfully deleted!'}, 2000);
            }
        }).then(()=>{
            const words = this.state.words.filter((word)=>{
                return word.id !== id
            });
            this.setState({
                words: words,
                itemsToUse: words
            })
            window.M.toast({html: 'Word successfully deleted!'}, 2000);
        })
    }



    render() {
        const state = this.state
        const words = state.words ? <div className="word_cards">
            <ul class="collection with-header">
                <li class="collection-header center grey lighten-2" style={{ marginTop: "0px" }}><h5><b><u>Word List</u></b></h5></li>
                <div className="row">
                <div className="col s3"></div>
                <div className="search-input">
                <div className="input-field col s3" style={{width: "50%"}}>
                    <i class="material-icons prefix">search</i>
                    <input type="text" className="search" onChange={this.searchHandler} />
                </div>
                </div>
                </div>
                {state.itemsToUse.length === 0 ? <p className="center">No words found</p> : state.itemsToUse.map((word) => {
                    return (
                        <li key={word.id} class="collection-item yellow lighten-3" ><div style={{ color: "#0d47a1" }}>{word.word}<BrowserRouter><i style={{paddingLeft: "5px", color: "#f50057", cursor: "pointer"}} class="material-icons secondary-content" onClick={() => this.delete(word.id)}>delete</i><Link to={"/update_word_form/" + word.id} class="secondary-content"><i class="material-icons">edit</i></Link></BrowserRouter></div></li>
                    )

                })}
            </ul>
        </div> : <Loading />
        return (<div>{words}</div>)
    }
}

export default withRouter(WordCard)
