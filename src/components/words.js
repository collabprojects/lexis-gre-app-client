import React from 'react';
import Loading from '../shared/loading';



class Words extends React.Component{
    state = {
        words: null
    }

    componentDidMount() {
        fetch('https://lexis-gre-app-server.herokuapp.com/words/').then((res) => {
            if (res.ok){
                return res.json()
            } 
        }).then((data) => {
            this.setState({
                words: data
            })
        })
    }

    render(){
        const state = this.state
        const wordList = state.words ? <div className="word_table">
            <table className="centered">
            <tr>
            <th>Word</th>
            <th>Meaning</th>
            <th>Second</th>
            <th>Sentence</th>
            </tr>
            {state.words.map((word) => {
                return (
                    <tr key={word.id}>
                    <td>{word.word}</td>
                    <td>{word.primary_meaning}</td>
                    <td>{word.secondary_meaning}</td>
                    <td>{word.sentence}</td>
                    </tr>
                )
            })}
            </table>
        </div> : <Loading/>
        return (
            <div className = "words">
                {wordList}
            </div>
        )
    }

}

export default Words