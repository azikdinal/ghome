import React from 'react';
import main from '../assets/main.jpg'
import {Button, Form} from "react-bootstrap";
import binoculars from '../assets/binoculars.png'
import CardList from "../components/CardList.jsx";
import HomePost from "../components/HomePost.jsx";
import HomeSearch from "../components/HomeSearch.jsx";

const Home = () => {
    return (
        <div>
            <HomeSearch/>
            <CardList/>
            <CardList/>
            <CardList/>
            <CardList/>
            <CardList/>
            <HomePost/>
            <CardList/>
        </div>
    );
};

export default Home;