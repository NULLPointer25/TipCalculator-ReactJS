import React, { useState } from 'react'
import { Form, Row, Col, FloatingLabel, Button, Card, Table, Alert } from 'react-bootstrap';

function InputOutput(props) {

    const [amount, setAmount] = useState(0)
    const [service, setService] = useState(0)
    const [customer, setCustomer] = useState("")
    const [tip, setTip] = useState([])
    const [totalCustomer, setTotalCustomer] = useState(0)


    const handler = (event) => {
        setAmount(event.target.value)
    }

    const handler1 = (event) => {
        setService(event.target.value)


    }
    const handler2 = (event) => {
        setCustomer(event.target.value)

        setTip(amount * service)


    }




    const getData = () => {

        props.AddCustomerName(`${customer} Calculated Amount of Tip - (in Rs.)  ${tip}`)



    }

    const getData1 = () => {
        props.AddTip(tip)
        setTotalCustomer(`${props.customername.length}`)
    }

    return (
        <>
            <div className=".bg-light">
                <div>
                    <Form className="container" >
                        <Form.Group className="container mb-3" controlId="formBillAmount">
                            <Form.Label>Enter Total Bill Amount</Form.Label>
                            <Form.Control type="text" placeholder="Enter Bill Amount" onChange={handler} />
                        </Form.Group>
                        <br></br>
                        <hr style={{ color: "black" }}></hr>
                    </Form>

                    <br></br>
                    <Form className="container">
                        <Row className="g-2">
                            <Col md>
                                <FloatingLabel controlId="floatingSelectGrid" label="Regarding The Service">
                                    <Form.Select aria-label="Floating label select example" value={service} onChange={handler1}>
                                        <option value="0">Rate Our Services</option>
                                        <option value="0.20">Excellent - 20%</option>
                                        <option value="0.15">Good - 15%</option>
                                        <option value="0.10">Not So Good - 10%</option>
                                        <option value="0.05">Bad - 5%</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel controlId="floatingInputGrid" label="Customer Name">
                                    <Form.Control type="text" placeholder="Enter Your Name" onChange={handler2} />
                                </FloatingLabel>
                                <br></br>
                                <br></br>
                            </Col>

                            <div className="container d-flex justify-content-center">
                                <Button variant="warning" style={{ width: "250px", fontWeight: "600" }} onClick={getData}>Add Customer Details</Button>
                            </div>
                        </Row>
                        <br></br>
                        <hr style={{ color: "black" }}></hr>

                        <div className="container">
                            <Card.Header style={{ textAlign: "center", fontSize: "25px", fontFamily: "Times New Roman', Times, serif", fontWeight: "bolder" }}>Customer List</Card.Header>
                            <br></br>

                            {
                                props.customername.map(ele => (
                                    <Alert variant="info">
                                        <Alert.Heading>{ele}</Alert.Heading>

                                    </Alert>
                                ))
                            }

                        </div>

                    </Form>
                    <br></br>
                    <hr style={{ color: "green" }}></hr>
                    <br></br>

                </div>
                <div className="container d-flex justify-content-center">
                    <Button variant="warning" style={{ width: "250px", fontWeight: "600" }} onClick={getData1} >Calculate Tip & Customer</Button>
                </div>
                <br></br>
                <div className="container">
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr style={{ textAlign: "center" }}>

                                <th>Total No of Customers</th>
                                <th>Calculated Tip</th>

                            </tr>
                        </thead>
                        <tbody style={{ textAlign: "center" }}>
                            {
                                <tr>

                                    <td>{totalCustomer}</td>


                                    <td>
                                        Rs.{props.totaltip.reduce((prev, next) => prev + next)}
                                    </td>

                                </tr>
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default InputOutput
