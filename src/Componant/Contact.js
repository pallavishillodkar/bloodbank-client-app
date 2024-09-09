import React, { useState } from "react";
import "../style/Contact.css";
import axios from "axios";

const Contact = () => {
  const [addContact, setaddContacts] = useState([]);
  const [name, setName] = useState("");
  const [emailid, setEmailId] = useState("");
  const [phone, setPhone] = useState("");
  const [messsage, setMesssage] = useState("");

  const AddContact = () => {
    const addcontact = {
      Name: name,
      EmailId: emailid,
      Phone: phone,
      Messsage: messsage,
    };

    axios
      .post("http://localhost:5000/api/addcontact", addcontact)
      .then((result) => {
        setaddContacts(result.data);
        alert("Contact Added..");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="page-container">
      <div className="background">
        <div className="form-container">
          <h4 style={{ color: "white", textAlign: "center" }}>Contact</h4>
          <form onSubmit={(e) => e.preventDefault()} className="form-main">
            <label>Your Name: </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <label>Email: </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmailId(e.target.value)}
            />
            <label>Phone: </label>
            <input
              type="number"
              name="Phone"
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
            />
            <label>Message</label>
            <textarea
              placeholder="Message`"
              onChange={(e) => setMesssage(e.target.value)}
            />
            <button type="send" onClick={() => AddContact()}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
