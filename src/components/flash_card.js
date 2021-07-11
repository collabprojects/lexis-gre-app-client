import React from 'react';
import Loading from '../shared/loading';


class FlashCard extends React.Component {
    state = {
        word: '',
        primary_meaning: '',
        sentence: '',
        placeholder: 'Tap to reveal',
        placeholder_sentence: 'Tap to reveal',
        rand_words: [],
        user_number: 25,
        length: null
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5000/words/').then((res) => {
            if (res.ok) {
                return res.json()
            }
        }).then((data) => {
            this.setState({
                length: data.length
            })
        }).then(() => {
            for (var i = 0; i < this.state.user_number; i++) {
                fetch('http://127.0.0.1:5000/word/' + Math.floor((Math.random() * this.state.length) + 1)).then((res) => {
                    if (res.ok) {
                        return res.json()
                    }
                }).then((data) => {
                    this.setState({
                        rand_words: [...this.state.rand_words, data]
                    })
                    //console.log(this.state.rand_words)
                })
            }
        })
        setTimeout(() => {
            const index = Math.floor((Math.random() * this.state.rand_words.length) + 1);
            this.setState({
                word: this.state.rand_words[index].word,
                primary_meaning: this.state.rand_words[index].primary_meaning,
                sentence: this.state.rand_words[index].sentence,
            })
        }, 500)

    }

    next = () => {
        const index = Math.floor((Math.random() * this.state.rand_words.length) + 1);
        this.setState({
            word: this.state.rand_words[index].word,
            primary_meaning: this.state.rand_words[index].primary_meaning,
            sentence: this.state.rand_words[index].sentence,
            placeholder: 'Tap to reveal',
            placeholder_sentence: 'Tap to reveal'
        })
    }

    reveal = () => {
        this.setState({
            placeholder: this.state.primary_meaning,
            placeholder_sentence: this.state.sentence,
        })
    }

    render() {
        const state = this.state;
        const card = state.word !== '' ? <div><div style={{ paddingTop: "10px"}}>
            <div>
                <div class="card yellow lighten-3 z-depth-2">
                    <div class="card-content white-text">
                        <span class="card-title" style={{ color: 'black', fontWeight: 'bold', textDecoration:"underline"}}>{state.word}</span>
                        <p style={{ fontWeight: 'bold', color: '#f50057' }}>Primary Meaning: </p>
                        <p style={{ color: '#0d47a1' }}>{state.placeholder}</p>
                        <br />
                        <p style={{ fontWeight: 'bold', color: '#f50057' }}>Sentence: </p>
                        <p style={{ color: '#0d47a1' }}>{state.placeholder_sentence}</p>
                    </div>
                    <div class="card-action">
                        <a onClick={this.reveal} style={{color:"#00bfa5", fontWeight: 'bold'}}>REVEAL</a>
                    </div>
                </div>
            </div>
        </div>
            <div className="center-align" style={{ paddingTop: "10px" }}>
                <button onClick={this.next} className="waves-effect waves-light btn pink accent-3">Next</button></div></div> : <div className="center"><Loading /></div>
        return (
            <div className="flash-card" style={{ width: "80%" }}>
                {card}
            </div>
        )
    }
}

export default FlashCard;


