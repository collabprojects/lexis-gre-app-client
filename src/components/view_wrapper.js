import React from 'react';
import Carousel from './carousel';
import WordCard from './word_cards';

class Wrapper extends React.Component{
    state = {
        show_wrapper: false
    }

    render(){
        return(
            <div>
            {this.state.show_wrapper ? <Carousel/> : <WordCard/>}
            </div>
        )
    }
}

export default Wrapper 