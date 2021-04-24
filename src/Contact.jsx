import React, { useEffect, useState } from 'react';
import {db} from "./firebase";
const Contact = () =>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [message,setMessage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection("contacts").add({
            name:name,
            email: email,
            phone:phone,
            message: message,
        })
        .then(()=> {
            alert("Message has been submitted")
        })
        .catch((error) => {
            alert(error.message);
        })
        setName('')
        setEmail('')
        setMessage('')
        setPhone('')
    }
    return (
        <>
            <div className="my-5">
                <h1> Contact Us</h1>
            </div>
            <div className="container contact_div my-6">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={handleSubmit}>
                        <div className="mb-3">
  <label for="exampleFormControlInput1" class="form-label">FullName</label>
  <input value={name} 
  type="text" 
  className="form-control" 
   placeholder="Enter your name"
   onChange={(e) => setName(e.target.value)}
   />
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone</label>
  <input type="tell" className="form-control"  
  value={phone} 
  className="form-control" 
   placeholder="Enter your number"
   onChange={(e) => setPhone(e.target.value)}
   />
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" className="form-control" 
  value={email} 
  className="form-control" 
   placeholder="Enter your Email"
   onChange={(e) => setEmail(e.target.value)}
   />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea className="form-control"  
  value={message}  
  className="form-control" 
   placeholder="Enter your Message"
   onChange={(e) => setMessage(e.target.value)}
   >
   </textarea>
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