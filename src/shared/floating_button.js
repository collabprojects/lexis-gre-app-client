import React from 'react'
import M from 'materialize-css';
import {Link} from 'react-router-dom'


//import { Container, Button, Link } from 'react-floating-action-button'

/*const FloatButton = () => {
   return (
       <Container>
           <Link href="/components/create_word_form"
               tooltip="Add Word"
               icon="fas fa-plus" />
       </Container>
   )
}*/

class FloatButton extends React.Component {

    render() {
        return(
        <div class="fixed-action-btn">
            <a class="btn-floating btn-large waves-effect waves-light teal accent-4">
            <Link to="/create_word_form"><i class="large material-icons">add</i></Link>
            </a>
        </div>
        )}
}

export default FloatButton;