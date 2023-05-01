import React from 'react';
import main from '../assets/main.jpg'
import {Button, Form} from "react-bootstrap";
import binoculars from '../assets/binoculars.png'
import CardList from "../components/CardList.jsx";

const Home = () => {
    return (
        <div>
            <div style={{
                backgroundImage: `url(${main})`,
                height: 450,
                width: "100%",
                backgroundPosition: "center",
                opacity: 0.9,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: '60px'
            }}
                 className='d-flex'>
                <div className='d-flex align-items-center flex-column'>
                    <h1 className='mb-5 text-white' style={{fontSize: 60}}>
                        Find your excellent place for live
                    </h1>
                    <div className='w-100 d-flex align-items-center justify-content-center'>
                        <Form className='w-50 '>
                            <Form.Group className="mb-3 d-flex " controlId="formBasicEmail">
                                <Form.Control style={{borderRadius: '85px'}} type="email"
                                              placeholder="Adress, City or Zip "/>
                                <Button variant="primary" type="submit">
                                    <img src={binoculars} height='40' alt=""/>
                                </Button>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
            <CardList/>
            <CardList/>
            <CardList/>
            <CardList/>
            <CardList/>
        </div>
    );
};

export default Home;