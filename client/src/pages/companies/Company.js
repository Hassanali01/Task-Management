import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Container } from "react-bootstrap";
import pp from "./avatar.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";
import axios from "axios";
import originURL from "../../url";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { Row, Col, Card } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import './Company.css'
// import Table from "./TableView/Table";
const Company = () => {
  const [companies, setCompanies] = useState([]);
  const [file, setfile] = useState();
  const [companyName, setCompanyName] = useState("");
  const [shortName, setShortName] = useState("");
  const [contactName, setContactName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [landLineNo, setLandLineNo] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const [detailModal, setDetailModal] = useState(false)
  const [update, setUpdate] = useState(false)
  const [view, setView] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const modalClose = () => setDetailModal(false);
  const modalShow = () => setDetailModal(true);
  const url = "companies/";
  const submitFormData = (e) => {
    e.preventDefault();
  };
  // function convertBase64(file) {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);

  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };

  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  // }

  // async function uploadImage(event) {
  //   const file = event.target.files[0];
  //   const base64 = await convertBase64(file);
  //   setfile(base64);
  //   const object = {
  //     target: {
  //       value: base64,
  //     },
  //   };

    // handleFormData("profilepic")(object);
    // console.log("base64", base64);
    // document.getElementById("avatar").src = `${base64}`;

    // return base64;
    // avatar.src = base64;
    // textArea.innerText = base64;
  // }
  const getCompany = async () => {
    try {
      const company = await axios.get(`${originURL}/${url}`);
      const res = company.data;
      console.log("addedCompany", res);
      setCompanies(res.companies);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCompany();

  }, [update]);

  return (
    <div
      className="content-wrapper"
      style={{ backgroundColor: "#f7f7f7", paddingTop: "50px", height: "90%" }}
    >
      <Container
        style={{ marginTop: "20px", marginBottom: "80px", height: "90%" }}
      >
        <Box>
          <Paper
            sx={{
              width: "100%",
              mb: 2,
              padding: "30px",
              paddingBottom: "20px",
            }}
          >
            <div style={{ display: "flex" }}>
              <h3>Company Information</h3>
              <div style={{ marginLeft: "65%" }} className="addCompany">
                <Button onClick={handleShow}>Add Company</Button>
              </div>
                        
            </div>
            <hr></hr>

            <div className="card-body">
              <div className="table-responsive">
                <div style={{ height: "auto", width: "100%" }}>
                  {/* {view ? (
                      <Table data={getdata}></Table>
                    ) : ( */}
                  <Container>
                    <Row>
                     

                    {console.log(("console123",companies))}
                      {companies.map((d, i) => {
                   
                        return (
                          <>
                            <Col xs="12" xl="3" lg="4" md="6" sm="6">
                              <Card>
                              
                                <Card.Title className="id" style={{textAlign:'center',fontWeight:'bold',marginBottom:'0',marginTop:'3%'}}>Company</Card.Title>
                                <hr></hr>
                                <Card.Body>
                                  
                                  <Card.Text style={{justifyContent:'center'}}>{d.companyName}</Card.Text>
                                  <Card.Text style={{justifyContent:'center'}}><span style={{fontWeight:'bold'}}>short name:&nbsp;</span>{d.shortName}</Card.Text>
                                  {/* <Button onClick={modalShow} >Details</Button> */}
                                  <div className="col-auto float-end ms-auto">
                <a
                  className="btn add-btn "
                  data-bs-toggle="modal"
                  data-bs-target="#add_employee"
                  // onClick={handleShow}
                >
                  <i
                    className="fa fa-plus"
                    style={{ fontSize: "14px", marginRight: "2px" }}
                  >
                    {" "}
                  </i>
                  <Link to="/companyDetails" state={{companies: d}} style={{color:'white'}}>Details</Link>
                </a>
              </div>
                                  {/* <div className='d-flex justify-content-center align-items-center'><p className="px-2 text-center buttoncolor rounded" style={{ width: '70%' }}>Add Employee</p></div> */}
                                </Card.Body>
                              </Card>
                              
                            </Col>

                          </>
                        );
                      
                      
                      })}
                     
                      
                    </Row>
                  </Container>
                  {/* ) */}
                  {/* } */}
                </div>
              </div>
            </div>


            <Modal show={detailModal} onHide={modalClose}>
              <Modal.Header closeButton>
                <Modal.Title>Company Details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              {companies.map((d, i) => {
                        return (
                          <>
                          <div>
                           {d.companyName}
                           </div>
                           <div>
                           {d.contactName}
                           </div>
                          </>
                        );
                      })}


              </Modal.Body>
              <Modal.Footer>
                <Button
                  style={{
                    marginLeft: "auto",
                    backgroundColor: "gray",
                    color: "white",
                    fontWeight: "700",
                  }}
                  variant="secondary"
                  onClick={modalClose}
                >
                  Close
                </Button>
                </Modal.Footer>
              </Modal>


            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add Company</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {/* <div style={{ display: "flex", justifyContent: "center" }}>
                <Form className="mb-3" controlId="formGridProfilePic">
                  <Form.Label htmlFor="uploadpic">
                    {file ? (
                      <> */}
                {/* {console.log("picinsrc",URL.createObjectURL(file))} */}

                {/* <img
                          className="rounded-circle"
                          style={{ width: "130px", height: "130px" }}
                          src={file}
                          alt=""
                        />
                      </>
                    ) : (
                      <img
                        className="rounded-circle"
                        src={pp}
                        alt=""
                        style={{ width: "130px", height: "130px" }}
                      />
                    )}
                  </Form.Label> */}

                {/* <Form.Control
                    type="file"
                    name="file"
                    // value={emp.profilepic}
                    // defaultValue={profilepic}
                    style={{ display: "none" }}
                    id="uploadpic"
                    onChange={async (e) => {
                      await uploadImage(e);
                    }}
                  /> */}
                {/* {console.log("profilepiccc", setfile)}
                  <div
                    className="w-100 text-center"
                    style={{ marginTop: "5px" }}
                  >
                    <label for="logo">Upload Logo</label>
                  </div>
                </Form>
              </div> */}
              <Container>
                <Row>
                  <Col>
    
                    <label style={{ color: "grey" }} for="Name">
                      Name:
                    </label>
                    <br></br>

                    <input
                      type="text"
                      placeholder="company name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />

                  </Col>
                  <Col>
                    <label style={{ color: "grey" }} for="sName">
                      {" "}
                      Short Name:
                    </label>
                    <br></br>

                    <input
                      type="text"
                      placeholder="short name"
                      value={shortName}
                      onChange={(e) => setShortName(e.target.value)}
                    />

                  </Col>
         
                </Row>
                <Row>
                  <Col>
       
                    <label style={{ color: "grey",marginTop:'1%' }} for="cName">
                      {" "}
                      Contact Name:
                    </label>
                    <br></br>

                    <input
                      type="text"
                      placeholder="contact name"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                    />
   
                  </Col>
                  <Col>
                           
                    <label style={{ color: "grey",marginTop:'1%' }} for="phone">
                      {" "}
                      Phone No:
                    </label>
                    <br></br>

                    {/* <InputGroup.Text style={{width:'11%'}}>+92</InputGroup.Text> */}
                    <input
                      type="number"
                      required
                      placeholder="phone no"
                      value={phoneNo}
                      onInput={(e) => {
                        e.target.value = Math.max(0, parseInt(e.target.value))
                          .toString()
                          .slice(0, 11);
                      }}
                      onChange={(e) => setPhoneNo(e.target.value)}
                      // defaultValue={emp.primaryphone}
                      // value={props.value8}
                      // onChange={handleinput}
                      // onChange={props.onChange}
                      // onChange={handleFormData("phone")}
                    />
                    {/* </Form.Group> */}
      
                  </Col>

                </Row>
                <Row>
                  <Col>

              
          
                    <label style={{ color: "grey",marginTop:'1%' }} for="landline">
                      LandLine No:
                    </label>
                    <br></br>

                    <input
                      type="number"
                      placeholder="LandLine no"
                      value={landLineNo}
                      onChange={(e) => setLandLineNo(e.target.value)}
                    />
           
                  </Col>
                  <Col>
                
                    <label style={{ color: "grey",marginTop:'1%' }} for="registration" className="registrationNo">
                      {" "}
                      Registration No:
                    </label>
                    <br></br>
                    <input
                      placeholder="registration no"
                      value={registrationNo}
                      onChange={(e) => setRegistrationNo(e.target.value)}
                    />
             
                  </Col>
             
                </Row>
                <Row>
                  <Col>
              
                 
                    <label style={{ color: "grey",marginTop:'1%' }} for="city">
                      {" "}
                      City:
                    </label>
                    <br></br>

                    <input
                      type="text"
                      placeholder="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
             
                  </Col>
                  <Col>
                 
                    <label style={{ color: "grey",marginTop:'1%' }} for="country" className="country">
                      Country:
                    </label>
                    <br></br>

                    <input
                      type="text"
                      placeholder="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                
                
                </Col>
                </Row>
                <Row>
                  <Col>

              
                    <label style={{ color: "grey",marginTop:'1%' }} for="postal">
                      Postal Code:
                    </label>
                    <br></br>

                    <input
                      placeholder="postal code"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                    />
                
                  </Col>
                  <Col>

                  
                    <label style={{ color: "grey",marginTop:'1%' }} for="address">
                      Address:
                    </label>
                    <br></br>
                    <input
                      placeholder="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                 
                </Col>
                </Row>
                <Row>
                  <Col>
             
             
                    <label style={{ color: "grey",marginTop:'1%' }}>Email:</label>
                    <br></br>
                    <input
                      placeholder="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
              
                  </Col>
                <Col>
               
                      <label for="logo" style={{ color: "grey",marginTop:'1%' }}>
                        Upload Logo:
                      </label>
             
                    <Form className="mb-3" controlId="formGridProfilePic">
                      <Form.Label htmlFor="uploadpic">
                        {file ? (
                          <>
                            {/* {console.log("picinsrc",URL.createObjectURL(file))} */}

                            <img
                              // className="rounded-circle"
                              style={{ width: "195px", height: "80px" }}
                              src={file}
                              alt=""
                            />
                          </>
                        ) : (
                          <div style={{width:'190px',height:"80px",border:'1px solid grey'}}>

                          <div style={{textAlign:'center',paddingTop:'15%',color:'grey'}}>Upload logo</div>
                        </div>
                        )}
                      </Form.Label>

                      <Form.Control
                        type="file"
                        name="file"
                        // value={emp.profilepic}
                        // defaultValue={profilepic}
                        // value={file}
                        style={{ display: "none" }}
                        id="uploadpic"
                
                        onChange={ (e) => {
                          console.log("e",e)
                          setfile(e.target.files[0]);
                        }}
                        // onChange={(e)=>setfile(e.tar)}
                        
                      />
                    </Form>
              
                  </Col>
          
                </Row>
                </Container>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  style={{
                    marginLeft: "auto",
                    backgroundColor: "gray",
                    color: "white",
                    fontWeight: "700",
                  }}
                  variant="secondary"
                  onClick={handleClose}
                >
                  Close
                </Button>
                &nbsp;&nbsp;
                <Button
                  style={{
                    backgroundColor: "#0F52BA",
                    color: "white",
                    fontWeight: "700",
                  }}
                  variant="primary"
                  onClick={async () => {
                    try {
                      const data = new FormData();
                      console.log("company", companyName);
                      console.log("shortname", shortName);
                      data.append("companyName", companyName);
                      data.append("contactName", contactName);
                      data.append("address", address);
                      data.append("phoneNo", phoneNo);
                      data.append("country", country);
                      data.append("city", city);
                      data.append("registrationNo", registrationNo);
                      data.append("landLineNo", landLineNo);
                      data.append("email", email);
                      data.append("shortName", shortName);
                      data.append("postalCode", postalCode);
                      data.append("logo",file)

                      const addCompany = await axios.post(
                        `${originURL}/companies/addcompany`,
                        data
                      );
                      addCompany &&
                        NotificationManager.success("Successfully Added");
                    } catch (err) {
                      console.log(err);
                    }
                    setCompanyName("");
                    setContactName("");
                    setPhoneNo("");
                    setLandLineNo("");
                    setCity("");
                    setCountry("");
                    setAddress("");
                    setPostalCode("");
                    setRegistrationNo("");
                    setShortName("");
                    setEmail("");
                    setfile("");
                    handleClose();
                    setUpdate(!update)
                  }}
                >
                  Submit
                </Button>
              </Modal.Footer>
            </Modal>
          </Paper>
        </Box>
      </Container>
    </div>
  );
};
export default Company;
