
import '../Style/Checkout.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import logo from '../assets/img/logo.png'
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { render } from '@testing-library/react'
export class Toprint extends React.Component{
    render(){
    return(
        <div>
            <br></br>
            <br></br> 
            <br></br>
            <div id="divv">
                <div id="head">
                <img id="imgg" src={logo}></img>
                    <b>Infinity Car Care</b>
                </div>
                <div id="work">
                    Work Order
                </div>
                <div id="info">
                    <Row md={3}>
                        <Col>
                            <p>Work order No : 1</p>
                        </Col>
                        <Col>
                        <p>Client Name: احمد محمد</p>
                        </Col>

                        <Col>
                        <p> Car Type: Bmw </p>
                        </Col>
                    </Row>
                    <Row md={3}>
                        <Col>
                        <p>Car Model: X6</p>
                        </Col>
                        <Col>
                        <p>Car Number: 123 اب</p>
                        </Col>
                        <Col>
                        <p>Mileage:10-000</p>
                        </Col>
                    </Row>

                    <Row md={3}>
                        <Col>
                        <p>Chasis Number: 1234</p>
                        </Col>
                        <Col>
                        <p>Maintance type : ميكانيكا</p>

                        </Col>
                        <Col>
                        <p>Date : 1/1/2020 12:pm</p>

                        </Col>
                    </Row>

                </div>

                <div id="orderdetail">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Services</th>
                        <th>Spare parts</th>
                        <th>Technician</th>
                        <th>Total cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>مراجعه كهرباء العربيه</td>
                        <td>تغيير ترومبه</td>
                        <td>أحمد علي</td>
                        <td>100.00</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>فك وتركيب فوانيس</td>
                        <td>تغيير ترومبه</td>
                        <td>مصطفي كامل</td>
                        <td>600.00</td>
                        </tr>
                    </tbody>
                    </Table>
                    <hr></hr>
                    <span>Total Cost :</span>
                    <span><b>700.00 LE</b></span>
                    <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Payment Type</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                            <option>Visa</option>
                            <option>Cash</option>
                            </Form.Control>
                        </Form.Group>
                </div>
            </div>
        </div>
    );
}
}

export default function Checkout() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
  
    return (
      <div>
        <Toprint ref={componentRef}></Toprint>
        <Button onClick={handlePrint} id="checkbtn"variant="primary">Print</Button>
      </div>
    );
  };
