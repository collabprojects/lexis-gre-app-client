import React from 'react';
import Loading from '../shared/loading';

class SingleCard extends React.Component {
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

    }


    render() {
        const state = this.state;
        const card = state.word !== '' ? <div><div style={{ paddingTop: "10px" }}>
            <div>
                <div class="card yellow lighten-3 z-depth-2">
                    <div class="card-content white-text">
                        <span class="card-title" style={{ color: 'black', fontWeight: 'bold', textDecoration: "underline" }}>{state.word}</span>
                        <p style={{ fontWeight: 'bold', color: '#f50057' }}>Primary Meaning: </p>
                        <p style={{ color: '#0d47a1' }}>{state.primary_meaning}</p>
                        <br />
                        <p style={{ fontWeight: 'bold', color: '#f50057' }}>Secondary Meaning: </p>
                        <p style={{ color: '#0d47a1' }}>{state.secondary_meaning}</p>
                        <br />
                        <p style={{ fontWeight: 'bold', color: '#f50057' }}>Sentence: </p>
                        <p style={{ color: '#0d47a1' }}>{state.sentence}</p>
                        <br />
                        <p style={{ fontWeight: 'bold', color: '#f50057' }}>Synonym: </p>
                        <p style={{ color: '#0d47a1' }}>{state.synonym}</p>
                        <br />
                        <p style={{ fontWeight: 'bold', color: '#f50057' }}>Antonym: </p>
                        <p style={{ color: '#0d47a1' }}>{state.antonym}</p>
                    </div>
                </div>
            </div>
        </div>
           </div> : <div className="center"><Loading /></div>
        return (
            <div className="flash-card" style={{ width: "80%" }}>
                {card}
                <br></br>
                    {state.word !== "" ? <div className="center-align"><i onClick = {() => this.props.history.push("/")} style={{ paddingLeft: "5px", color: "#039be5", cursor: "pointer" }}  class="material-icons small">home</i></div> : <p></p>}
            </div>
        )
    }



}
export default SingleCard