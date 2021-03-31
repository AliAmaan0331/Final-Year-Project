import React, { useEffect, useState } from 'react';

const Contact = () =>{
    const[data, setData]=useState({
        fullname:"",
        phone:"",
        email:"",
        msg:"",
    });
    const InputEvent = (event) => {
        const {name, value}=event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name] : value,
            };
        });
    };
    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`My Name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}.`);
    };
    return (
        <>
            <div className="my-5">
                <h1> Contact Us</h1>
            </div>
            <div className="container contact_div my-6">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                        <div className="mb-3">
  <label for="exampleFormControlInput1" class="form-label">FullName</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" name="FullName"  onChange={InputEvent} placeholder="Enter your name"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone</label>
  <input type="tell" className="form-control" id="exampleFormControlInput1" name="Phone"  onChange={InputEvent} placeholder="mobile number"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" name="Email address"  onChange={InputEvent} placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg"  onChange={InputEvent}></textarea>
</div>
<div className="col-12">
    <button className="btn btn-outline-primary" type="submit">
        Submit form
    </button>
</div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Contact;