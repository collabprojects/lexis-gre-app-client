import React from 'react';
import { withRouter, connect, mapDispatchToProps, mapStateToProps, Link } from 'react-router-dom';
import M from 'materialize-css';

class WordForm extends React.Component {
    state = {
        word: '',
        primary_meaning: '',
        secondary_meaning: '',
        sentence: '',
        synonym: '',
        antonym: '',
        error: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = () => {
        //const state = this.state
        const word = this.state.word
        const wordObj = {
            word: word.trim(),
            primary_meaning: this.state.primary_meaning,
            secondary_meaning: this.state.secondary_meaning,
            sentence: this.state.sentence,
            synonym: this.state.synonym,
            antonym: this.state.antonym
        }
        fetch('https://lexis-gre-app-server.herokuapp.com/words/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(wordObj)
        }).then((res) => {
            if (res.status === 409) {
                this.setState({
                    error: 'Word already available'
                })
                setTimeout(() => {
                    this.setState({
                        error: ''
                    })
                }, 3000)
            }
            else {
                this.setState({
                    word: '',
                    primary_meaning: '',
                    secondary_meaning: '',
                    sentence: '',
                    synonym: '',
                    antonym: '',
                    error: '',
                })
                M.toast({ html: 'Word successfully added!' }, 2000);
            }
        })
    }

    clear_all = () => {
        this.setState({
            word: '',
            primary_meaning: '',
            secondary_meaning: '',
            sentence: '',
            synonym: '',
            antonym: '',
        })
    }

    render() {
        return (
            <div className="word-form">
                <div className="center">
                    <h5><b><u>Add New Word</u></b></h5>
                    <form className="center">
                        <input type='text' id='word' value={this.state.word} placeholder='Enter word' onChange={this.handleChange} />
                        <textarea  class="materialize-textarea" type='text' id='primary_meaning' value={this.state.primary_meaning} placeholder='Enter Primary Meaning' onChange={this.handleChange} />
                        <textarea class="materialize-textarea" type='text' id='secondary_meaning' value={this.state.secondary_meaning} placeholder='Enter Secondary Meaning' onChange={this.handleChange} />
                        <textarea class="materialize-textarea" type='text' id='sentence' value={this.state.sentence} placeholder='Enter Sentence' onChange={this.handleChange} />
                        <input type='text' id='synonym' value={this.state.synonym} placeholder='Enter Synonyms' onChange={this.handleChange} />
                        <input type='text' id='antonym' value={this.state.antonym} placeholder='Enter Antonyms' onChange={this.handleChange} />
                    </form>
                    <button onClick={this.handleSubmit} disabled={this.state.word !== '' ? false : true} className="waves-effect waves-light btn pink accent-3" style={{ marginTop: "15px" }}>Add Word</button>
                    <br/>
                    <br/>
                    <div className="center">
                    <i style={{cursor: "pointer"}} class="material-icons small" onClick = {this.clear_all}>delete_sweep</i>
                    <br/>
                    <br/>
                    <Link to="/"><i style={{ paddingRight: "5px", color: "#039be5", cursor: "pointer" }}  class="material-icons small">home</i></Link>
                    </div>
                    <p style={{ color: 'red' }}>{this.state.error}</p>
                </div>
            </div>
        )
    }

}

export default WordForm;