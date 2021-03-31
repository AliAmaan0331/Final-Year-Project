import React from 'react';
import { Button, Form, FormGroup, Input, Label} from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';
import "./Login.css";
const Forgetpassword = () =>{
    return (
        <div className="loginstyler">
        <Form className="login-form">
            <h1><span className="font-weight-bold">Aamdani</span>.com</h1>
            <h2 className="text-center">Welcome</h2>
            <FormGroup>
                <Label>Enter Your Email-ID</Label>
                <Input type="email" placeholder="Email"/>
            </FormGroup>
            <Button className="loginbutton btn-lg btn-dark btn-block" onClick="Password recovery email has been sent">
                Next
            </Button>
            <div className="text-center">
                <a href="/Signup">Sign up</a>
            </div>
        </Form>
        </div>
    );
};
export default Forgetpassword;