import React, {useState} from 'react';
import {Row, Col, Button, Form} from "react-bootstrap";
import {Alert, Container} from "react-bootstrap";
import Axios from "axios";
import "./registration.css"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {domain} from "../env";


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = async (e) => {
        e.preventDefault();
        await Axios({
            method: "post",
            url: `${domain}/api/login/`,
            data: {
                'username': username,
                'password': password
            }
        }).then(response => {
            toast.success('Logged in Successfully !!', { position: toast.POSITION.TOP_CENTER })
            window.localStorage.setItem("token", response.data['token'])
            window.location.href = '/registration'
        }).catch(_ => {
            toast.error('Your username or password is incorrect !! Try Again ....', { position: toast.POSITION.TOP_CENTER })
        })
    }

    return (
        <Container>
            <Row className="justify-content-md-center text-left ">
                <Col xs={12} sm={12} lg={4}>
                    <div className="mt-5    registration">
                        <div className="m-5  ">
                            <h1 className="text-center">Login</h1>
                            <Form onSubmit={login}>
                                {<ToastContainer/>}

                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>

                                <div className="text-center">
                                    <Button className="mt-2 mb-5" type="submit" variant="success">
                                        Login
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
