import React from 'react'
import Card from './Card'
import Sdata from './Sdata'


const Service = () =>{
    return (
        <>
        <div className="servicemain">
            <div className="my-5">
                <h1 > Our Services </h1>
            </div>
            <div className=" servo">
                <div className="row">
                    <div className="col-10 mx_auto">        
                            <div className="row gy-4 serv">
                                {
                                    Sdata.map((val, ind)=>{
                                    return<Card 
                                    imgsrc={val.imgsrc}
                                    title= {val.title}
                                    linkk={val.linkk}
                                    />
                                })
                                }
                            </div>
                            
                        </div>
                    </div>
                </div>
                </div>
        </>
    );
};
export default Service;