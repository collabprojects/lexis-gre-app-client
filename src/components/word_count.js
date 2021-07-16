import React from 'react';
import { BrowserRouter, withRouter } from 'react-router-dom';

class WordCount extends React.Component {

    state = {
        user_number: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = () => {

    }
    render() {
        return (
            
            <div className="word-count">
                <div className="center">
                <h5><b><u>Enter Flash Card Count</u></b></h5>
                <form className="user_input">
                    <input type='text' id='user_number' onChange={this.handleChange} style={{textAlign:"center",width:"50%",fontSize:"20px",fontWeight:"bold",color:"#f50057"}}/>
                </form>
                <BrowserRouter><button onClick={this.handleSubmit} disabled={isNaN(this.state.user_number) || this.state.user_number===""} className="waves-effect waves-light btn pink accent-3" style={{ marginTop: "5%" }}>Generate</button></BrowserRouter>
                </div>
            </div>
           
        )}
}
export default withRouter(WordCount)