import React from "react";
import Apositive from "../image/A+ve.png";
import Anegative from "../image/A-ve.png";
import Opositive from "../image/O+ve.png";
import Onegative from "../image/O-ve.png";
import ABpositive from "../image/AB+ve.png";
import ABnegative from "../image/AB-ve.png";
import Bpositive from "../image/B+ve.png";
import Bnegative from "../image/B-ve.png";
import "../style/BagsStatus.css";
import { Card, Col, Row } from "react-bootstrap";

const BagsStatus = () => {

  return (
    <div className="bags-status-main-div">
      <h4 style={{textAlign:"center", fontFamily:"serif" ,color:"red" ,fontWeight:"600"}}>BagsStatus</h4>
      <div className="bagsstatus-div">
        <Row>
          <Col>
            <Card className="bagsstatus-card">
              <Card.Img className="bagsstatus-img" src={Apositive}/>
              <Card.Body>
                <h6 className="bagsstatus-h6">BloodGroup:A+ve</h6>
                <h6 className="bagsstatus-h6">BagsPrice: &#8377; 300</h6>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bagsstatus-card">
              <Card.Img className="bagsstatus-img" src={Anegative}/>
              <Card.Body>
                <h6 className="bagsstatus-h6">BloodGroup:A-ve</h6>
                <h6 className="bagsstatus-h6">BagsPrice: &#8377; 200</h6>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bagsstatus-card">
              <Card.Img className="bagsstatus-img" src={Opositive}/>
              <Card.Body>
                <h6 className="bagsstatus-h6">BloodGroup:O+ve</h6>
                <h6 className="bagsstatus-h6">BagsPrice: &#8377; 400</h6>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bagsstatus-card">
              <Card.Img className="bagsstatus-img"src={Onegative}/>
              <Card.Body>
                <h6 className="bagsstatus-h6">BloodGroup:O-ve</h6>
                <h6 className="bagsstatus-h6">BagsPrice: &#8377; 400</h6>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="bagsstatus-card">
              <Card.Img className="bagsstatus-img"src={ABpositive}/>
              <Card.Body>
                <h6 className="bagsstatus-h6">BloodGroup:AB+ve</h6>
                <h6 className="bagsstatus-h6">BagsPrice: &#8377; 200</h6>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bagsstatus-card">
              <Card.Img className="bagsstatus-img"src={ABnegative}/>
              <Card.Body>
                <h6 className="bagsstatus-h6">BloodGroup:AB-ve</h6>
                <h6 className="bagsstatus-h6">BagsPrice: &#8377; 250</h6>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bagsstatus-card">
              <Card.Img className="bagsstatus-img" src={Bpositive}/>
              <Card.Body>
                <h6 className="bagsstatus-h6">BloodGroup:B+ve</h6>
                <h6 className="bagsstatus-h6">BagsPrice: &#8377; 150</h6>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bagsstatus-card">
              <Card.Img className="bagsstatus-img" src={Bnegative}/>
              <Card.Body>
                <h6 className="bagsstatus-h6">BloodGroup:B-ve</h6>
                <h6 className="bagsstatus-h6">BagsPrice: &#8377; 200</h6>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BagsStatus;
