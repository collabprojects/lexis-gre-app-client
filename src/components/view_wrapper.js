import React from 'react';
import Carousel from './carousel';
import WordCard from './word_cards';
import Words from './words'

class Wrapper extends React.Component{
    state = {
        show_wrapper: false
    }

    render(){
        return(
            <div style={{marginTop:"20px"}}>
            <div className="center">
            <i style={{cursor: "pointer"}} onClick = {() => this.setState({show_wrapper: !this.state.show_wrapper})} class="material-icons small">{this.state.show_wrapper ? "dehaze" : "grid_on"}</i>
            </div>
            {this.state.show_wrapper ? <Words /> : <WordCard/>}
            </div>
        )
    }
}

export default Wrapper 