import React from 'react';
import {APARTMENT_ROUTE} from "../utils/consts.js";
import apart from "../assets/apart1.png";

const Card = () => {
    return (
        <div>
            {/*<a style={{*/}
            {/*    position: "absolute",*/}
            {/*    top:0,*/}
            {/*    left:0,*/}
            {/*    width:"100%",*/}
            {/*    height:"100%"*/}
            {/*}} href={APARTMENT_ROUTE}></a>*/}
            <div>
                <img src={apart} height='200px' alt=""/>
            </div>
            <div>
                <div className='p-3'>
                    <div className='d-flex align-items-center'>
                        <span style={{
                            backgroundColor: "red",
                            borderRadius: 4,
                            width: 12,
                            height: 12,
                            marginRight: 4
                        }}></span>
                        <div>Condo</div>
                    </div>
                    <h4>$1,275,000</h4>
                    <ul
                        style={{
                            listStyleType: 'none',
                            display: "flex",
                            alignItems: "center",
                            padding: 0,
                            margin: 0
                        }}>
                        <li>2 bed</li>
                        <li style={{marginLeft: 16}}>1 bath</li>
                        <li style={{marginLeft: 16}}>1,149 sqft</li>
                    </ul>

                    <div>3136 Scott St</div>
                    <div>San Francisco, CA 94123</div>
                </div>
            </div>

        </div>
    );
};

export default Card;