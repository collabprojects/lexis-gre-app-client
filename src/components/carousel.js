import React from 'react';
import Loading from '../shared/loading';
import M from 'materialize-css';


class Carousel extends React.Component{

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
            var elems = document.querySelectorAll('.carousel');
            M.Carousel.init(elems);
        })
    }

    render(){
        const state = this.state;
        return(
            <div>
            {this.state.words ? <div className="carousel corousel-slider">
                    {this.state.words.map((word) => {
                       return( <div className="carousel-item">
                       <div class="card yellow lighten-3 z-depth-2">
                       <div class="card-content white-text">
                           <span class="card-title" style={{ color: 'black', fontWeight: 'bold', textDecoration: "underline" }}>{word.word}</span>
                           <p style={{ fontWeight: 'bold', color: '#f50057' }}>Primary Meaning: </p>
                           <p style={{ color: '#0d47a1' }}>{word.primary_meaning}</p>
                           <br />
                           <p style={{ fontWeight: 'bold', color: '#f50057' }}>Secondary Meaning: </p>
                           <p style={{ color: '#0d47a1' }}>{word.secondary_meaning}</p>
                           <br />
                           <p style={{ fontWeight: 'bold', color: '#f50057' }}>Sentence: </p>
                           <p style={{ color: '#0d47a1' }}>{word.sentence}</p>
                           <br />
                           <p style={{ fontWeight: 'bold', color: '#f50057' }}>Synonym: </p>
                           <p style={{ color: '#0d47a1' }}>{word.synonym}</p>
                           <br />
                           <p style={{ fontWeight: 'bold', color: '#f50057' }}>Antonym: </p>
                           <p style={{ color: '#0d47a1' }}>{word.antonym}</p>
                       </div>
                   </div>
                       </div>)
                    })}
            </div> : <Loading/>}
            </div>
        )
    }
}

export default Carousel