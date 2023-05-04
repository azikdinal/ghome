import React, {useState} from 'react';
import axios from "axios";
import p1 from '../assets/apart/p1.png'
import p2 from '../assets/apart/p2.png'
import p3 from '../assets/apart/p3.png'
import p4 from '../assets/apart/p4.png'

const Apartment = () => {
    const [message, setMessage] = useState('')

    axios.get(import.meta.env.VITE_API_URL + '/api/mess/message',).then((res) => {
        setMessage(res.data.message)
    })


    return (
        <div style={{maxWidth: 1280, margin: '0 auto'}}>
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
            <div style={{height: 50, width: '100%'}}></div>
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
                <h3>$1,876,567</h3>
                <b>Est. <a href="">$4,875/mo</a></b>
            </div>
            <ul className='d-flex'>
                <li><span style={{fontSize:'inherit', listStyleType:'none', fontWeight:700}}>5</span>bed</li>
                <li><span>3</span>bath</li>
                <li><span>1,657</span>sqft</li>
                <li><span>3,158</span>sqft lot</li>
            </ul>
        </div>
    );
};

export default Apartment;