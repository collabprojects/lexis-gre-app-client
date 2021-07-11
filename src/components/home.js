import React from 'react';
import {Link } from 'react-router-dom';
import Routes from '../routes';


const Home = () => {
    return (
        <div className="home">
            <Link to="/all_words">View All Words</Link>
            <br></br>
            <Link to="/flash_cards">Revise Words</Link>
            <br></br>
            <Link to="/create_word_form">Add a New Word</Link>
            <Routes/>
            <Link to="/update_word_form">Update Existing Word</Link>
            <Routes/>
        </div>
    )
}

export default Home;