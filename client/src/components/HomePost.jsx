import React from 'react';
import post from "../assets/post.jpg";
import {Button} from "react-bootstrap";
import {ADMIN_ROUTE} from "../utils/consts.js";

const HomePost = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection:"column",
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${post})`,
            height: 450,
            width: "100%",
            backgroundPosition: "center",
            opacity: 1,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: '60px',
            color: "white"
        }}>
            <h2 style={{fontSize: 25}}>Trends</h2>
            <p style={{fontSize: 40}}>Why you should discover Georgia as place to live</p>
            <Button style={{borderRadius:'50px'}} variant={"outline-light"} onClick={() => navigate(ADMIN_ROUTE)}>Read</Button>
        </div>
    );
};

export default HomePost;