import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../shared/loading';
import Popup from 'reactjs-popup';
//import M from 'materialize-css';
import FloatButton from '../shared/floating_button';
import M from 'materialize-css';

class WordCard extends React.Component {
    state = {
        words: null,
        itemsToUse: [],
        show: false
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



    delete = (id) => {
        fetch('https://lexis-gre-app-server.herokuapp.com/word/' + id, {
            method: 'DELETE'
        }).then((res) => {
            if (res.status === 204) {
                M.toast({ html: 'Word successfully deleted!' }, 2000);
            }
        }).then(() => {
            const words = this.state.words.filter((word) => {
                return word.id !== id
            });
            this.setState({
                words: words,
                itemsToUse: words
            })
            M.toast({ html: 'Word successfully deleted!' }, 2000);
        })
    }

    open = () => {
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
        // M.Modal.init(this.Modal, options)
    }



    render() {

        const state = this.state;
        const words = state.words ? <div className="word_cards">
            <ul class="collection with-header">
                <li class="collection-header center grey lighten-2" style={{ marginTop: "0px" }}><h5><b><u>Word List</u></b></h5></li>
                <div className="center-align">
                            <p style={{color:"#424242", opacity:"0.4"}}>Total Word Count</p>
                            <p style={{color: "#f50057"}}>{this.state.words.length}</p>
                            </div>
                <div className="row">
                    <div className="col s3"></div>
                    <div className="search-input">
                        <div className="input-field col s3" style={{ width: "50%" }}>
                            <i class="material-icons prefix">search</i>
                            <input type="text" className="search" onChange={this.searchHandler} />
                            
                        </div>
                    </div>
                </div>
                {state.itemsToUse.length === 0 ? <p className="center">No words found</p> : state.itemsToUse.map((word) => {
                    return (
                        <div>
                            <div>
                                <li key={word.id} class="collection-item yellow lighten-3" ><div style={{ color: "#0d47a1" }}><Link to={"/view_word/" + word.id + "/total_word_count=" + state.words.length} style={{ color: "#0d47a1", fontWeight: "bold" }}>{word.word}</Link>
                                    <Link to={"/update_word_form/" + word.id } class="secondary-content"><i class="material-icons">edit</i></Link></div></li>
                            </div>
                        </div>

                    )

                })}
            </ul>
        </div> : <Loading />
        return (<div>
            {words}
            <br />
            <br />
            <br />
            <FloatButton style={{ marginTop: "30px" }} />
        </div>)
    }
}

export default WordCard
