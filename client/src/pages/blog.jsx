import React, {useEffect, useState} from 'react';
import Article from "../components/Article.jsx";
import RightBar from "../components/RightBar.jsx";
import axios from "axios";

const Blog = () => {
    const [article, setArticle] = useState('')
    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + '/api/blog').then((res) => {
                setArticle(res.body)
            }
        )
    }, [])

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