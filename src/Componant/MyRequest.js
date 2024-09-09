import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/MyRequest.css";
import axios from "axios";
import { Card, Col, Container, Row } from "react-bootstrap";
// import MyRequest from "./MyRequest";


function MyRequest() {
    const [Myrequest, setMyrequest] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:5000/api/allrequest")
        .then((result) => {
            setMyrequest(result.data);
        })
        .catch((err) => {
            console.log(err);
        });
    });
    return(
        <div className="request">
            <h4 style={{textAlign:"center", fontFamily:"serif" ,color:"red" ,fontWeight:"600"}}>My Request</h4>
            <Container>
                <Row>
                   {Myrequest.map((requests) => {
                    return(
                        <Col sm={12} md={9} lg={3}>
                            <Card className="request-card">
                                <Card.Body className="myrequest-card">
                                    <Card.Text className="request-text">RequestData:{requests.RequestDate}</Card.Text>
                                    <Card.Text className="request-text">RequestStatus:{requests.RequestStatus}</Card.Text>
                                    <Card.Text className="request-text">HospitalName:{requests.HospitalName}</Card.Text>
                                    <Card.Text className="request-text">HospitalAddress:{requests.HospitalAddress}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                   })}
                </Row>
            </Container>
        </div>
    );
};

export default MyRequest;