import React from 'react';
import { Button, Form, FormGroup, Input, Label} from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';
import { useEffect, useState } from 'react';
import "./Login.css";
import {db} from "./firebase";
const Signup = () =>{
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [password,setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection("Signup").add({
            email: email,
            phone:phone,
            password: password,
        })
        .then(()=> {
            alert("Message has been submitted")
        })
        .catch((error) => {
            alert(error.message);
        })
        setEmail('')
        setPassword('')
        setPhone('')
    }
    return (
        <div className="loginstyler">
        <Form className="login-form" onSubmit={handleSubmit}>
            <h1><span className="font-weight-bold">Aamdani</span>.com</h1>
            <h2 className="text-center">Welcome</h2>
            <FormGroup>
                <Label>Email</Label>
                <Input type="email" placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input type="password" placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label>Re-Enter Password</Label>
                <Input type="password" placeholder="Password"/>
            </FormGroup>
            <FormGroup>
                <Label>Contact#</Label>
                <Input type="tell" placeholder="Contact#"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                />
            </FormGroup>
            <Button className="loginbutton btn-lg btn-dark btn-block">Sign-Up
            </Button>
            <div className="text-center pt-3">
                Or continue with your social account
            </div>
            <FacebookLoginButton className="mt-3 mb-3"/>
        </Form>
        </div>
    );
};
export default Signup;