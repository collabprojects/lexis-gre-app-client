import React from 'react';
import {Link, BrowserRouter,  withRouter } from 'react-router-dom';





class WordCount extends React.Component {

    state = {
        user_number: '',
        error: '',
        length: null,
    }

    componentDidMount() {
        fetch('https://lexis-gre-app-server.herokuapp.com/words/').then((res) => {
            if (res.ok){
                return res.json()
            } 
        }).then((data) => {
            this.setState({
                length: data.length
            })
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        
    }

    check = () =>{
        if (this.state.user_number !== ''){
            if (this.state.user_number < 5){
                this.setState({
                    error: 'Number should be more than 5'
                })
            }
            else{
                this.setState({
                    error: ''
                })
            }
        }
    }
    
    render() {
        return (
            <div className="word-count">
                <div className="center">
                <h5><b><u>Enter Flash Card Count</u></b></h5>
                <form className="user_input">
                    <input type='text' id='user_number' onChange={this.handleChange} style={{textAlign:"center",width:"50%",fontSize:"20px",fontWeight:"bold",color:"#f50057"}}/>
                    <br/>
                    <label>*Number should be greater than 5</label>
                    <br/>
                    <br/>
                    <label>Available words in Database:</label><p style={{color: "#f50057"}}>{this.state.length}</p>
                    <Link to={'/flash_card/generate_words='+this.state.user_number}><button disabled={isNaN(this.state.user_number) || this.state.user_number==="" || this.state.user_number < 5 || this.state.length < this.state.user_number} onClick = {this.check} className="waves-effect waves-light btn pink accent-3" style={{ marginTop: "5%" }}>Generate</button> </Link>
                </form>
                </div>
            </div>

           
           
        )}
}
export default WordCount