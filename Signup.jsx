import React from 'react';
import { Button, Form, FormGroup, Input, Label} from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';
import "./Login.css";
const Signup = () =>{
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
            <FormGroup>
                <Label>Re-Enter Password</Label>
                <Input type="password" placeholder="Password"/>
            </FormGroup>
            <FormGroup>
                <Label>Contact#</Label>
                <Input type="tell" placeholder="Contact#"/>
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