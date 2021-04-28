import React from 'react';
import { Button, Form, FormGroup, Input, Label} from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';
import "./Login.css";
import {db} from "./firebase";
import { useEffect, useState } from 'react';
const Login = () =>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [passworderror,setPasswordError] = useState("");
    const [emailerror,setEmailError] = useState("");
    const handlelogin = ()=>{
        db
        .auth()
        .signInWithEmailAndPassword(email,password)
        .catch(err =>{
            switch(err.code){
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
                setEmailError(err.message);
                break;
                case "auth/wrong-password":
                setPasswordError(err.message);
            }
            
        })
}
    return (
        <div className="loginstyler">
        <Form className="login-form">
            <h1><span className="font-weight-bold">Aamdani</span>.com</h1>
            <h2 className="text-center">Welcome</h2>
            <FormGroup>
                <Label>Email</Label>
                <Input type="email" placeholder="Email"/>
            </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input type="password" placeholder="Password"/>
            </FormGroup>
            <Button className="loginbutton btn btn-dark btn-lg btn-block" href="/Dashboard">Log in
            </Button>
            <div className="text-center pt-3">
                Or continue with your social account
            </div>
            <FacebookLoginButton className="mt-3 mb-3"/>
            <div className="text-center">
                <a href="/Signup">Sign up</a>
                <span className="p-2">|</span>
                <a href="/Forgetpassword">Forgot Password</a>
            </div>
        </Form>
        </div>
    );
};
export default Login;
