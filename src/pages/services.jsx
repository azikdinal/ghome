import React from 'react';
import cleaning from "../assets/cleaning.jpg";
import {Button, Form} from "react-bootstrap";
import binoculars from "../assets/binoculars.png";
import CardList from "../components/CardList.jsx";

const Services = () => {
    return (
        <div>
        <div style={{
            display:"flex",
            backgroundImage: `url(${cleaning})`,
            height: 450,
            width: "100%",
            backgroundPosition: "center",
            opacity: 0.8,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: '60px',

        }}>
            <div className='d-flex align-items-center flex-column'>
                <h1 className='mb-5' style={{fontSize: 60}}>
                    Find your special cleaning service
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

export default Services;