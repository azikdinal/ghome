import React, {useEffect, useState} from 'react';
import axios from "axios";
import p1 from '../assets/apart/p1.png'
import p2 from '../assets/apart/p2.png'
import p3 from '../assets/apart/p3.png'
import p4 from '../assets/apart/p4.png'
import CardList from "../components/CardList.jsx";
import {Button} from "react-bootstrap";
import calendar from '../assets/calendar.png'
import hummer from '../assets/hummer.png'
import linear from '../assets/linear.png'
import house from '../assets/house.png'
import compass from '../assets/compass.png'

const Apartment = () => {
    const [price, setPrice] = useState(0)
    const [bath, setBath] = useState(0)
    const [sqft, setSqft] = useState(0)
    const [type, setType] = useState('')
    const [address, setAddress] = useState('')
    const [year, setYear] = useState(0)


    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + '/api/property/1',).then((res) => {
            setPrice(res.data.price)
        })
        axios.get(import.meta.env.VITE_API_URL + '/api/property/1',).then((res) => {
            setBath(res.data.bath)
        })
        axios.get(import.meta.env.VITE_API_URL + '/api/property/1',).then((res) => {
            setSqft(res.data.sqft)
        })
        axios.get(import.meta.env.VITE_API_URL + '/api/property/1',).then((res) => {
            setType(res.data.type)
        })
        axios.get(import.meta.env.VITE_API_URL + '/api/property/1',).then((res) => {
            setAddress(res.data.address)
        })
        axios.get(import.meta.env.VITE_API_URL + '/api/property/1',).then((res) => {
            setYear(res.data.year)
        })
    }, [])


    return (
        <div style={{maxWidth: 1280, margin: '50px auto 0 auto'}}>
            <div className='d-flex flex-column'>
                <div>Presented by: <a href="">Anna Lew</a></div>
                <div>Brokered by: <b>COMPASS</b></div>
            </div>
            <div className='d-flex p-1'>
                <div className=''>
                    <picture>
                        <img src={p1} alt="" height={600}/>
                    </picture>
                </div>
                <div className='d-flex flex-column ps-1 gap-2'>
                    <picture>
                        <img src={p2} alt="" height={200}/>
                    </picture>
                    <picture>
                        <img src={p3} alt="" height={200}/>
                    </picture>
                    <picture>
                        <img src={p4} alt="" height={200}/>
                    </picture>
                </div>
            </div>
            {/*Attributes*/}
            <div style={{height: 50, width: '100%'}}></div>
            <div style={{width: 720}}>
                <div className='d-flex align-items-center'>
                        <span style={{
                            backgroundColor: "red",
                            borderRadius: 4,
                            width: 12,
                            height: 12,
                            marginRight: 4
                        }}></span>
                    <div>For sale</div>
                </div>
                <div className='d-flex gap-4'>
                    <h3>{price}</h3>
                    <b>Est. <a href="">{price / 20}</a></b>
                </div>
                <ul className='d-flex list-unstyled'>
                    <li className='me-1'><span style={{marginRight: 3, fontSize: 'inherit', fontWeight: 700}}>5</span>bed
                    </li>
                    <li className='me-1'><span style={{marginRight: 3, fontSize: 'inherit', fontWeight: 700}}>{bath}</span>bath
                    </li>
                    <li className='me-1'><span
                        style={{marginRight: 3, fontSize: 'inherit', fontWeight: 700}}>{sqft}</span>sqft
                    </li>
                    <li className='me-1'><span
                        style={{marginRight: 3, fontSize: 'inherit', fontWeight: 700}}>3,158</span>sqft
                        lot
                    </li>
                </ul>

                <div>11 Manor Dr, San Francisco, CA 94127</div>
                <div>
                    <ul style={{
                        display: 'grid',
                        listStyle: 'none',
                        gridTemplateColumns: 'minmax(50%, max-content) minmax(max-content, 1fr)'
                    }}>
                        <li><img src={house} alt=""/>
                            <div>
                                <div>Single family</div>
                                <div>Property type</div>
                            </div>
                        </li>
                        <li><img src={calendar} alt=""/>
                            <div>
                                <div>14 Hours</div>
                                <div>Time on Realtor.com</div>
                            </div>
                        </li>
                        <li><img src={linear} alt=""/>
                            <div>
                                <div>$898</div>
                                <div>Price per sqft</div>
                            </div>
                        </li>
                        <li><img src={hummer} alt=""/>
                            <div>
                                <div>1930</div>
                                <div>Year built</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='mb-4 mt-4 d-flex gap-5'>
                    <Button variant="outline-primary">Ask a question</Button>
                    <Button variant="outline-primary">Share this home</Button>
                </div>
                {/*Company*/}
                <div style={{display: "grid", gridTemplateColumns: '1fr 1fr'}}>
                    <div className='d-flex'>
                        <div className='me-3'><img src={compass} alt=""/></div>
                        <div>
                            <div>Presented by:</div>
                            <div><a href="">Anna Lew</a></div>
                            <ul className='list-unstyled'>
                                <li>Brokered by:</li>
                                <li>COMPASS</li>
                                <li><a href="">(415) 660-9955</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>Data Source:</div>
                            <div>SanFrancisco</div>
                        </div>
                        <hr/>
                        <div>
                            <div>Source's Property ID:</div>
                            <div>423738788</div>
                        </div>
                        <hr/>

                        <div>
                            <div>Data Source Copyright:</div>
                            <div>
                                ©2023 San Francisco Association of REALTORS®. All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>
                <CardList/>
                <CardList/>
            </div>


        </div>
    );
};

export default Apartment;