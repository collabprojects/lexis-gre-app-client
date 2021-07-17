import React from 'react'
import M from 'materialize-css';


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
  

    
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.fixed-action-btn');
            var instances = M.FloatingActionButton.init(elems);
          });
    }

    render() {
        return(
        <div class="fixed-action-btn">
            <a class="btn-floating btn-large waves-effect waves-light teal accent-4">
                <i class="large material-icons">add</i>
            </a>
        </div>
        )}
}

export default FloatButton;