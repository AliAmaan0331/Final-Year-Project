import React from 'react'
import bell from "./Passport Size Photo.jpg";
import stars from "./stars.png";
import fourstars from "./four-stars.jpg";
import threestars from "./three-stars.png";
import bell2 from "./Shahzeb.jpeg";
import bell3 from "./Ahsan.jpeg";
import bell4 from "./AliHaider.jpeg";
import bell5 from "./shahrukh.jpg";
import bell6 from "./model.png";
import "./gig.css";
import { NavLink } from "react-router-dom";
import Sdata from './Sdata'
import {useState} from 'react';

const Gig = () =>{
    const [searchTerm, setSearchTerm]=useState('')
    return (
        <>
        <div class='major'>
        <input type="text" placeholder="Search Services" className="search-box" onChange={event => {setSearchTerm(event.target.value)}}/>
        {Sdata.filter((val)=>{
                            if(searchTerm == ""){
                                return 0
                            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val
                            }
                            }).map((val,key)=>{
                                return <div><a href={val.linkk} className="searchtxt"> {val.title} </a></div>
                            })}
            <br></br>
            <div id='c1'>
                <div id='intro'>
                    <h1>Content Writing</h1>
                    <h2>Gig by: Ali Amaan</h2>
                    <img src={bell} class='picmajor'/>
                    <br></br>
                    <img src={stars} class='picminor'/>
                    <h4>Level 5 Seller</h4>
                </div>
                <table class="table table-borderless table-dark">
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <th scope="row">500 Words</th>
                            <td>Rs. 1500</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <th scope="row">2000 Words</th>
                            <td>Rs. 3500</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <th scope="row">4500 Words</th>
                            <td>Rs. 6000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br></br>
            <div id='c2'>
                <div id='intro'>
                    <h1>PHP</h1>
                    <h2>Gig by: Shahzeb Salim</h2>
                    <img src={bell2} class='picmajor'/>
                    <br></br>
                    <img src={fourstars} class='picminor'/>
                    <h4>Level 4 Seller</h4>
                </div>
                <table class="table table-borderless table-dark">
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <th scope="row">Single Page Website</th>
                            <td>Rs. 7500</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <th scope="row">2-3 Page Website</th>
                            <td>Rs. 10,000-12,000</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <th scope="row">4-6 Page Website</th>
                            <td>Rs. 15,000-30,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br></br>
            <div id='c3'>
                <div id='intro'>
                    <h1>HTML and CSS</h1>
                    <h2>Gig by: Shahrukh</h2>
                    <img src={bell5} class='picmajor'/>
                    <br></br>
                    <img src={threestars} class='picminor'/>
                    <h4>Level 3 Seller</h4>
                </div>
                <table class="table table-borderless table-dark">
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <th scope="row">Single Page</th>
                            <td>Rs. 4500</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <th scope="row">2-3 Pages</th>
                            <td>Rs. 7000-9000</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <th scope="row">4-6 Pages</th>
                            <td>Rs. 12,000-20,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br></br>
            <div id='c4'>
                <div id='intro'>
                    <h1>Search Engine Optimization</h1>
                    <h2>Gig by: Ahsan Zia</h2>
                    <img src={bell3} class='picmajor'/>
                    <br></br>
                    <img src={stars} class='picminor'/>
                    <h4>Level 5 Seller</h4>
                </div>
                <table class="table table-borderless table-dark">
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <th scope="row">Fix on page SEO Issue: 10 pages</th>
                            <td>Rs. 1500</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <th scope="row">Fix on page SEO Issue: 20 pages</th>
                            <td>Rs. 3000</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <th scope="row">Fix on page SEO Issue: 50 pages</th>
                            <td>Rs. 6000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br></br>
            <div id='c5'>
                <div id='intro'>
                    <h1>Solid Works</h1>
                    <h2>Gig by: alina</h2>
                    <img src={bell6} class='picmajor'/>
                    <br></br>
                    <img src={stars} class='picminor'/>
                    <h4>Level 5 Seller</h4>
                </div>
                <table class="table table-borderless table-dark">
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <th scope="row">Simple 3D Model</th>
                            <td>Rs. 2000</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <th scope="row">3D model + Drawing</th>
                            <td>Rs. 4500</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <th scope="row">3D model + Drawing + 3D Animation</th>
                            <td>Rs. 16000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br></br>
            <div id='c6'>
                <div id='intro'>
                    <h1>Video Editing</h1>
                    <h2>Gig by: Ali Haider</h2>
                    <img src={bell4} class='picmajor'/>
                    <br></br>
                    <img src={stars} class='picminor'/>
                    <h4>Level 5 Seller</h4>
                </div>
                <table class="table table-borderless table-dark">
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <th scope="row">All you need package</th>
                            <td>Rs. 1600</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <th scope="row">Impressive to Very Impressive</th>
                            <td>Rs. 4500</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <th scope="row">Professional at your service</th>
                            <td>Rs. 7000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br></br>
        </div>
        </>
    );
};
export default Gig;