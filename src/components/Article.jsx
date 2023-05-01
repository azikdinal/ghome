import React from 'react';
import {ADMIN_ROUTE} from "../utils/consts.js";
import {Button} from "react-bootstrap";
import note from '../assets/note.png'

const Article = () => {

    const text = `  The Republic of Georgia, located in the Caucasus region of Eurasia, is a country with a rich cultural heritage and breathtaking natural beauty. From the snow-capped peaks of the Caucasus Mountains to the lush vineyards of the Kakheti region, Georgia is a land of stunning contrasts and diversity. One of the most notable features of Georgia is its cuisine, which is renowned for its bold flavors, fresh ingredients, and unique combinations of spices and herbs. Traditional Georgian dishes include khinkali (dumplings filled with meat, spices, and vegetables), khachapuri (cheese-filled bread), and shashlik (grilled skewered meats). Georgia is also known for its wine, with a winemaking tradition that dates back over 8,000 years. The country produces a wide range of wines, from dry and full-bodied reds to light and crisp whites, and many visitors to Georgia enjoy taking wine tours and tastings. In addition to its culinary delights, Georgia is also home to many historic sites and cultural landmarks. The capital city of Tbilisi, with its winding streets, colorful architecture, and hot sulfur baths, is a popular destination for visitors, as is the ancient city of Mtskheta, a UNESCO World Heritage site and former capital of the Kingdom of Georgia. For outdoor enthusiasts, Georgia offers a wealth of natural wonders, including the stunning Gergeti Trinity Church, perched atop a mountain in the town of Kazbegi, and the lush, green valleys of Svaneti, a remote region of the country known for its hiking and trekking trails. Whether you're interested in exploring Georgia's rich history and culture, sampling its delicious cuisine, or immersing yourself in its natural wonders, there's something for everyone in this fascinating and diverse country.`
    return (
        <article style={{
            width:720
        }}>
            <div>
                <h5>Charls Bukovski</h5>
                <h3>Why should you live in Georgia</h3>
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
                        5 min
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
                        <div>436 views</div>

                    </div>
                </div>
                <div>{text}
                </div>
                <div>
                    <Button style={{borderRadius: '50px'}} variant={"outline-dark"}
                            onClick={() => navigate(ADMIN_ROUTE)}>
                        Read more
                    </Button>
                </div>
                <div style={{
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