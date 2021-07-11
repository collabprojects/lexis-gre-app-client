import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Loading from '../shared/loading';

class WordCard extends React.Component {
    state = {
        words: null
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5000/words/').then((res) => {
            if (res.ok) {
                return res.json()
            }
        }).then((data) => {
            this.setState({
                words: data
            })
        })
    }

    render() {
        const state = this.state
        const words = state.words ? <div className="word_cards">
            <ul class="collection with-header">
                <li class="collection-header"><h4>Word List</h4></li>

                {state.words.map((word) => {
                    return (
                        <li key={word.id} class="collection-item"><div>{word.word}<BrowserRouter><Link to={"/update_word_form/" + word.id} class="secondary-content"><i class="material-icons">edit</i></Link></BrowserRouter></div></li>
                    )

                })}
            </ul>
        </div> : <Loading />
        return (<div>{words}</div>)
    }
}

export default WordCard
