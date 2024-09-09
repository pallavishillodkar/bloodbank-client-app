import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Modal, Row, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../style/DonorList.css";
const DonorList = () => {
  const { UserData } = useSelector((state) => state.user);
  //add donor
  const [alldonor, setalldonor] = useState([]);
  const [RequestDate, setRequestDate] = useState("");
  const [RequestStatus, setRequestStatus] = useState("");
  const [HospitalName, setHospitalName] = useState("");
  const [HospitalAddress, setHospitalAddress] = useState("");
  const [selectedDonors, setselectedDonors] = useState({});
  //alldonor
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/alldonors")
      .then((result) => {
        setalldonor(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const RequestData = () => {
    const addRequest = {
      DonorId: selectedDonors._id,
      PatientId: UserData._id,
      RequestDate: RequestDate,
      RequestStatus: RequestStatus,
      HospitalName: HospitalName,
      HospitalAddress: HospitalAddress,
    };

    axios
      .post("http://localhost:5000/api/addrequest", addRequest)
      .then((result) => {
        setShowRequest(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [ShowRequest, setShowRequest] = useState(false);
  const onShowRequest = () => {
    setShowRequest(true);
  };
  const onHideRequest = () => {
    setShowRequest(false);
  };

  return (
    <div style={{height:'50%'}}>
      <h4 style={{textAlign:"center", fontFamily:"serif" ,color:"red" ,fontWeight:"600"}}>DonorList</h4>
      <Container>
        <Row>
          {alldonor.map((donor) => {
            return (
              <Col sm={12} md={9} lg={3}>
                <Card classname="donor-card">
                  <Card.Body className="donor-card-body">
                   <h6 className="donors-h6">Name: {donor.DonorName}</h6>
                   <h6 className="donors-h6">Mobile No: {donor.DonorMoNo}</h6>
                   <h6 className="donors-h6">Address: {donor.DonorAddress}</h6>
                   <h6 className="donors-h6">City: {donor. DonorCity}</h6>
                   <h6 className="donors-h6">BloodGroup: {donor.DonorBloodGroup}</h6>
                   <h6 className="donors-h6">Gender: {donor.DonorGender}</h6>
                    <div>
                      <Card.Subtitle className="donor-h6">
                        {donor.BagsPrice}
                      </Card.Subtitle>
                    </div>
                    <Card.Footer>
                      <button
                        className="reward-btn"
                        onClick={() => {
                          setselectedDonors(donor);
                          onShowRequest();
                          // alert("request");
                        }}
                      > <span class="IconContainer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 60 20"
                        class="box-top box"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-width="4"
                          stroke="#6A8EF6"
                          d="M2 18L58 18"
                        ></path>
                        <circle
                          stroke-width="5"
                          stroke="#6A8EF6"
                          fill="#101218"
                          r="7"
                          cy="9.5"
                          cx="20.5"
                        ></circle>
                        <circle
                          stroke-width="5"
                          stroke="#6A8EF6"
                          fill="#101218"
                          r="7"
                          cy="9.5"
                          cx="38.5"
                        ></circle>
                      </svg>
                  
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 58 44"
                        class="box-body box"
                      >
                        <mask fill="white" id="path-1-inside-1_81_19">
                          <rect rx="3" height="44" width="58"></rect>
                        </mask>
                        <rect
                          mask="url(#path-1-inside-1_81_19)"
                          stroke-width="8"
                          stroke="#6A8EF6"
                          fill="#101218"
                          rx="3"
                          height="44"
                          width="58"
                        ></rect>
                        <line
                          stroke-width="6"
                          stroke="#6A8EF6"
                          y2="29"
                          x2="58"
                          y1="29"
                          x1="-3.61529e-09"
                        ></line>
                        <path
                          stroke-linecap="round"
                          stroke-width="5"
                          stroke="#6A8EF6"
                          d="M45.0005 20L36 3"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-width="5"
                          stroke="#6A8EF6"
                          d="M21 3L13.0002 19.9992"
                        ></path>
                      </svg>
                  
                      <span class="coin"></span>
                    </span>
                    <span class="text">Request</span>
                        
                      </button>
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>

      <Modal className="donor-modal" show={ShowRequest} onHide={onHideRequest}>
        <Modal.Header closeButton>
          <Modal.Title>Update Request</Modal.Title>
        </Modal.Header>
        <Modal.Body className="donor-modal-body">
          <Form>
            <Form.Control className="donor-control"
              onChange={(e) => setRequestDate(e.target.value)}
              type="date"
              placeholder="Enter Date"
            />
            <Form.Control
              onChange={(e) => setRequestStatus(e.target.value)}
              type="text"
              placeholder="Enter Status"
            />
            <Form.Control
              onChange={(e) => setHospitalName(e.target.value)}
              type="text"
              placeholder="Enter Hospital Name"
            />
            <Form.Control
              onChange={(e) => setHospitalAddress(e.target.value)}
              type="text"
              placeholder="Enter Hospital Address"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className="button-add" onClick={() => RequestData()}> <span>Add Request</span></button>
          <button className="button-add" onClick={() => onHideRequest()}>Cancel Request</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DonorList;
