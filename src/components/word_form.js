import React from 'react';

class WordForm extends React.Component{
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
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = () => {
        //const state = this.state
        const wordObj = {
            word : this.state.word,
            primary_meaning: this.state.primary_meaning,
            secondary_meaning: this.state.secondary_meaning,
            sentence: this.state.sentence,
            synonym: this.state.synonym,
            antonym: this.state.antonym
        }
        fetch('http://127.0.0.1:5000/words/', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(wordObj)
        }).then((res)=>{
            if (res.status === 409){
                this.setState({
                    error: 'Word already available'
                })
                setTimeout(()=>{
                    this.setState({
                        error: ''
                    })
                }, 3000)
            }
            else{
                window.M.toast({html: 'Word successfully added!'}, 2000);
            }
        })
    }

    render(){
        return (
            <div className="word-form">
            <div className="center">
            <h5>Add New Word</h5>
            <form className="center">
            <input type='text' id='word' value={this.state.word} placeholder='Enter word' onChange={this.handleChange}/>
            <input type='text' id='primary_meaning' value={this.state.primary_meaning} placeholder='Enter Primary Meaning' onChange={this.handleChange}/>
            <input type='text' id='secondary_meaning' value={this.state.secondary_meaning} placeholder='Enter Secondary Meaning' onChange={this.handleChange}/>
            <input type='text' id='sentence' value={this.state.sentence} placeholder='Enter Sentence' onChange={this.handleChange}/>
            <input type='text' id='synonym' value={this.state.synonym} placeholder='Enter synonyms' onChange={this.handleChange}/>
            <input type='text' id='antonym' value={this.state.antonym} placeholder='Enter antonyms' onChange={this.handleChange}/>
            </form>
            <button onClick={this.handleSubmit} disabled = {this.state.word !== '' ? false : true} className = "waves-effect waves-light btn">Submit</button>
            <p style={{color: 'red'}}>{this.state.error}</p>
            </div>
            </div>
        )
    }

}

export default WordForm;