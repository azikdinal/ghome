import React, {useEffect, useState} from 'react';
import Article from "../components/Article.jsx";
import RightBar from "../components/RightBar.jsx";
import axios from "axios";

const Blog = () => {


    return (
        <div style={{
            maxWidth: 1280,
            margin: "40px auto 0 auto",
            padding: 10,
            display: "flex",

        }}>
            <div className='me-4'>
                <Article/>
                <Article/>
                <Article/>
            </div>

            <RightBar/>
        </div>
    );
};

export default Blog;