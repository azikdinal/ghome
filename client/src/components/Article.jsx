import React, {useEffect, useState} from 'react';
import {ADMIN_ROUTE} from "../utils/consts.js";
import {Button} from "react-bootstrap";
import note from '../assets/note.png'
import axios from "axios";

const Article = () => {

    const [text, setText] = useState('')
    const [title, setTitle] = useState('')
    const [views, setViews] = useState(0)
    const [readTime, setReadTime] = useState(0)
    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + '/api/article/1').then((res) => {
            setTitle(res.data.title)
        })
        axios.get(import.meta.env.VITE_API_URL + '/api/article/1').then((res) => {
            setReadTime(res.data.readTime)
        })
        axios.get(import.meta.env.VITE_API_URL + '/api/article/1').then((res) => {
            setViews(res.data.views)
        })
        axios.get(import.meta.env.VITE_API_URL + '/api/article/1').then((res) => {
            setText(res.data.body)
        })
    }, [])

    return (
        <article style={{
            width: 720
        }}>
            <div className='bg-info p-5 mb-5'>
                <h5>Charls Bukovski</h5>
                <h3>{title}</h3>
                <div style={{
                    display: 'flex',
                    gap: '16px'
                }}>
                    <div style={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-clock-fill me-2" viewBox="0 0 16 16">
                            <path
                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                        </svg>
                        {readTime} min
                    </div>
                    <div style={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-eye-fill me-2" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                            <path
                                d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                        </svg>
                        <div>{views} views</div>

                    </div>
                </div>
                <div>{text}</div>
                <div className='mt-4'>
                    <Button style={{borderRadius: '50px'}} variant={"outline-dark"}
                            onClick={() => navigate(ADMIN_ROUTE)}>
                        Read more
                    </Button>
                </div>
                <div style={{
                    marginTop: 8,
                    display: "flex",
                    alignItems: "center"
                }}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",

                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-bookmark-fill" viewBox="0 0 16 16">
                            <path
                                d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
                        </svg>
                        <span className='ms-1'>3</span>
                    </div>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: 10

                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-chat-fill" viewBox="0 0 16 16">
                            <path
                                d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/>
                        </svg>
                        <span className='ms-1'>3</span>
                    </div>
                </div>
            </div>
        </article>
    )

};

export default Article;