import React from 'react';
import apart from '../assets/apart1.png'
import {APARTMENT_ROUTE} from "../utils/consts.js";
import Card from "./Card.jsx";

const CardList = () => {
    return (
        <div style={{
            margin: '0 auto 60px auto',
            maxWidth: window.innerWidth * 0.85,

        }}>
            <div className='mb-4'>
                <h2>Homes around $1,395,000</h2>
                <a href="">View all in San Francisco, CA</a>
            </div>
            <div className='d-flex justify-content-sm-between'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    );
};

export default CardList;