import React from 'react';
import M from 'materialize-css';

class WordFormUpdate extends React.Component {
    state = {
        word: '',
        primary_meaning: '',
        secondary_meaning: '',
        sentence: '',
        synonym: '',
        antonym: '',
        error: '',
    }
    componentDidMount() {
        fetch('https://lexis-gre-app-server.herokuapp.com/word/' + this.props.match.params.id).then((res) => {
            if (res.ok) {
                return res.json()
            }
        }).then((data) => {
            this.setState({
                word: data.word,
                primary_meaning: data.primary_meaning,
                secondary_meaning: data.secondary_meaning,
                sentence: data.sentence,
                synonym: data.synonym,
                antonym: data.antonym
            })
        })
        const options = {
            onOpenStart: () => {
                console.log("Open Start");
            },
            onOpenEnd: () => {
                console.log("Open End");
            },
            onCloseStart: () => {
                console.log("Close Start");
            },
            onCloseEnd: () => {
                console.log("Close End");
            },
            inDuration: 250,
            outDuration: 250,
            opacity: 0.5,
            dismissible: false,
            startingTop: "4%",
            endingTop: "10%"
        };
         M.Modal.init(this.Modal)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }


    handleSubmit = () => {
        //const state = this.state
        const wordObj = {
            word: this.state.word,
            primary_meaning: this.state.primary_meaning,
            secondary_meaning: this.state.secondary_meaning,
            sentence: this.state.sentence,
            synonym: this.state.synonym,
            antonym: this.state.antonym
        }
        fetch('https://lexis-gre-app-server.herokuapp.com/word/' + this.props.match.params.id, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(wordObj)
        }).then((res) => {
            if (res.status === 409) {
                this.setState({
                    error: 'Unable to fetch word'
                })
                setTimeout(() => {
                    this.setState({
                        error: ''
                    })
                }, 3000)
            }
            else {
                M.toast({ html: 'Word successfully updated!' }, 2000);
            }
        })
    }

    delete = (id) => {
        fetch('https://lexis-gre-app-server.herokuapp.com/word/' + id, {
            method: 'DELETE'
        }).then((res) => {
            if (res.status === 204) {
                M.toast({ html: 'Word successfully deleted!' }, 2000);
            }
        }).then(() => {
            this.props.history.push("/");
            M.toast({ html: 'Word successfully deleted!' }, 2000);
            //<i disabled= {true} style={{ paddingLeft: "5px", color: "#f50057", cursor: "pointer" }} data-target="modal1" class="material-icons secondary-content modal-trigger">delete</i>
        })
    }

    render() {
        return (
            <div className="word-form">
                <div className="center">
                    <h5><b><u>Update Word</u></b></h5>
                    <form className="center">
                        <input type='text' id='word' value={this.state.word} placeholder='Enter word' onChange={this.handleChange} />
                        <textarea class="materialize-textarea" type='text' id='primary_meaning' value={this.state.primary_meaning} placeholder='Enter Primary Meaning' onChange={this.handleChange} />
                        <input type='text' id='secondary_meaning' value={this.state.secondary_meaning} placeholder='Enter Secondary Meaning' onChange={this.handleChange} />
                        <textarea class="materialize-textarea" type='text' id='sentence' value={this.state.sentence} placeholder='Enter Sentence' onChange={this.handleChange} />
                        <input type='text' id='synonym' value={this.state.synonym} placeholder='Enter Synonyms' onChange={this.handleChange} />
                        <input type='text' id='antonym' value={this.state.antonym} placeholder='Enter Antonyms' onChange={this.handleChange} />
                    </form>
                    <button onClick={this.handleSubmit} disabled={this.state.word !== '' ? false : true} className="waves-effect waves-light btn pink accent-3" style={{ marginTop: "15px" }}>Update Word</button>
                    <div
                        ref={Modal => {
                            this.Modal = Modal;
                        }}
                        id="modal1"
                        className="modal"
                    >
                        <div class="modal-content">
                            <h4>Are you sure?</h4>
                            <p>Are you sure you want to delete this word?</p>
                        </div>
                        <div class="modal-footer">
                            <a href="#!" class="modal-close waves-effect waves-green btn-flat" onClick={() => this.delete(this.props.match.params.id)}>Agree</a>
                        </div>
                    </div>
                    <p style={{ color: 'red' }}>{this.state.error}</p>
                </div>
            </div>
        )
    }

}

export default WordFormUpdate;