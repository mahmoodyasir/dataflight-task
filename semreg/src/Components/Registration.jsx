import React, {useState} from "react";
import {Row, Col, Button, Form} from "react-bootstrap";
import {Alert, Container} from "react-bootstrap";
import Axios from "axios";
import "./registration.css";
import {domain} from "../env";

function Registration() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [department, setDepartment] = useState("");
    const [university, setUniversity] = useState("");
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        console.log(email, password, firstName, lastName)
        e.preventDefault();
        setSubmitted(true);
        Axios({
            method: "post",
            url: `${domain}/api/register/`,
            data: {
                "username": email,
                "password": password,
                "first_name": firstName,
                "last_name": lastName,
                "email": email,
                "department": department,
                "university": university
            }
        }).then(response => {
            console.log(response.data['message']);

        })
    };


    const successMessage = () => {
        return (
            <Container
                className="success text-center"
                style={{
                    display: submitted ? "" : "none",
                }}
            >
                <Alert
                    variant="success "
                    onClose={() => setSubmitted(false)}
                    dismissible
                >
                    <p>Registration Successfully</p>
                </Alert>
            </Container>
        );
    };

    return (
        <Container>
            <Row className="justify-content-md-center text-left ">
                <Col xs={12} sm={12} lg={4}>
                    <div className="mt-5    registration">
                        <div className="m-5  ">
                            <h1 className="text-center">Register</h1>
                            {successMessage()}
                            <Form onSubmit={handleSubmit}>
                                {/*onSubmit={}*/}
                                <Form.Group>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="First Name"
                                                required
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                            ></Form.Control>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Lirst Name"
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                            ></Form.Control>
                                        </div>
                                    </div>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                        required
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
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

                                <Form.Group>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Label>Department Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                required
                                                placeholder="Department Name"
                                                value={department}
                                                onChange={(e) => setDepartment(e.target.value)}
                                            ></Form.Control>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Label>University Name</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="University Name"
                                                value={university}
                                                onChange={(e) => setUniversity(e.target.value)}
                                            ></Form.Control>
                                        </div>
                                    </div>
                                </Form.Group>
                                <Button className="mt-2 mb-5 " type="submit" variant="success">
                                    Register
                                </Button>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Registration;
