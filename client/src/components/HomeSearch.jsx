import React from 'react';
import main from "../assets/main.jpg";
import {Button, Form} from "react-bootstrap";
import binoculars from "../assets/binoculars.png";

const HomeSearch = () => {
    return (
        <div style={{
            display: "flex",
            backgroundImage: `url(${main})`,
            height: 450,
            width: "100%",
            backgroundPosition: "center",
            opacity: 0.9,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: '60px'
        }}>
            <div className='d-flex align-items-center flex-column'>
                <h1 className='mb-5 text-white' style={{fontSize: 60}}>
                    Find your excellent place for live
                </h1>
                <div className='w-100 d-flex align-items-center justify-content-center'>
                    <Form className='w-50 '>
                        <Form.Group controlId="formBasicEmail">
                            <div style={{
                                marginBottom: 3,
                                display: "flex",

                            }}>
                                <Form.Control style={{borderRadius: '30px 0px 0px 30px'}} type="text"
                                              placeholder="Adress, City or Zip "/>
                                <Button style={{
                                    backgroundColor: "rgb(33 37 41)",
                                    color: 'white',
                                    border: "4px solid rgb(33 37 41)",


                                }} type="submit">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-search" viewBox="0 0 16 16">
                                        <path
                                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                    </svg>
                                </Button>
                            </div>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default HomeSearch;