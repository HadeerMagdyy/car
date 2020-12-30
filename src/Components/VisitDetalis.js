import React,{Component} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import $ from "jquery";
import 'react-dropdown-tree-select/dist/styles.css'
import '../Style/VisitDetalis.css'
class VisitDetalis extends Component{
     filter=()=>{
        $(document).ready(function(){
        $("#myInput").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
        });
    }

    filterProduct=()=>{
        $(document).ready(function(){
        $("#myInput").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#TableProduct tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
        });
    }
    render(){
    return(
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Row>
                {/*left div -- visit detail */}
                <Col id="roww">
                <h3>Visit details</h3>
                <Row md={4}>
                    <Col>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Car Type</Form.Label>
                        <Form.Control type="text"readOnly/>
                      </Form.Group>
                     </Col>

                     <Col>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Car Model</Form.Label>
                        <Form.Control type="text"readOnly/>
                      </Form.Group>
                     </Col>

                     <Col>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Chasis Number</Form.Label>
                        <Form.Control type="text"readOnly/>
                      </Form.Group>
                     </Col>
                </Row>

                <Row md={4}>
                    <Col>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Kilometers</Form.Label>
                        <Form.Control type="text"readOnly/>
                      </Form.Group>
                     </Col>

                     <Col>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Motor Number</Form.Label>
                        <Form.Control type="text"readOnly/>
                      </Form.Group>
                     </Col>

                     <Col>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="text"readOnly/>
                      </Form.Group>
                     </Col>
                </Row>

                <Row>
                    <Col>
                    <Table striped bordered hover size="xsm">
                    <thead>
                        <tr>
                        <th>Item Code</th>
                        <th>Item Name</th>
                        <th>Item Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>مراجعه كهرباء العربيه</td>
                        <td>100.00</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>فك وتركيب فوانيس</td>
                        <td>200.00</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td >مراجعه كهرباء الابواب</td>
                        <td>300.50</td>
                        </tr>
                        <tr>
                        <td>4</td>
                        <td > كهرباء الابواب</td>
                        <td>500.00</td>
                        </tr>
                        <tr>
                        <td>5</td>
                        <td >مراجعه كهرباء الابواب</td>
                        <td>400.00</td>
                        </tr>
                    </tbody>
                    </Table>
                  </Col>
                </Row>
                <Row>
                <Col>
                    <label>
                    Total price : 
                    </label>
                    <input type="text" readOnly value="2500"></input>
                    </Col>
                </Row>
                <Row>
                
                    <Col>
                    <Button id="add-btn" variant="success" href="/Dashboard">Back to dashboard</Button>
                    </Col>
                    <Col>
                    <Button id="add-btn" variant="success" href="/Checkout">End visit</Button>
                    </Col>
                </Row>
                
                </Col>
                 {/*right div --  order */}
                 <Col id="right">
                     <h3>Services</h3>
                     <Col>
                     <Row md={3}>
                      <Col>
                              <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Product</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                            <option>كهرباء</option>
                            <option>ميكانيكا</option>

                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                         <input class="form-control" id="myInput" type="text" placeholder="Search.." onClick={this.filterProduct}></input>
                     </Col>
                   </Row>
                        <Table striped bordered hover size="xsm">
                    <thead>
                        <tr>
                        <th>Item Code</th>
                        <th>Item Name</th>
                        <th>Item Price</th>
                        <th>Add</th>
                        </tr>
                    </thead>
                    <tbody  id="TableProduct">
                        <tr>
                        <td>1</td>
                        <td>مراجعه كهرباء العربيه</td>
                        <td>100.00</td>
                        <td>
                        <Button id="add-btn"variant="primary">Add</Button>
                        </td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>فك وتركيب فوانيس</td>
                        <td>200.00</td>
                        <td>
                        <Button id="add-btn"variant="primary">Add</Button>
                        </td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td >مراجعه كهرباء الابواب</td>
                        <td>300.50</td>
                        <td>
                        <Button id="add-btn"variant="primary">Add</Button>
                        </td>
                        </tr>
                        
                    </tbody>
                    </Table>
                     </Col>
                        <hr></hr>
                     <Col>
                     <Row md={3}>
                      <Col>
                              <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Spare part</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                            <option>كهرباء</option>
                            <option>ميكانيكا</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                     <Col>
                         <input class="form-control" id="myInput" type="text" placeholder="Search.." onClick={this.filter}></input>
                     </Col>
                   </Row>
                        <Table striped bordered hover size="xsm">
                    <thead>
                        <tr>
                        <th>Item Code</th>
                        <th>Item Name</th>
                        <th>Item Price</th>
                        <th>Add</th>
                        </tr>
                    </thead>
                    <tbody id="myTable">
                        <tr>
                        <td>1</td>
                        <td>مراجعه كهرباء العربيه</td>
                        <td>100.00</td>
                        <td>
                        <Button id="add-btn"variant="primary">Add</Button>
                        </td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>فك وتركيب فوانيس</td>
                        <td>200.00</td>
                        <td>
                        <Button id="add-btn"variant="primary">Add</Button>
                        </td>
                        </tr>
                        
                    </tbody>
                    </Table>
                     </Col>
                     
                     <Col>
                     </Col>
                     
                 </Col>
    
            </Row>
        </div>
    );
    }
}

export default VisitDetalis;