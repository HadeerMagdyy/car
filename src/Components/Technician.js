import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import tech from '../assets/img/technician.jpg'
import Form from 'react-bootstrap/Form'
import '../Style/Technician.css'
export default function Technician(){
    return(
        <div>
             <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Row>
                <h3 id="h3">أضافه فني</h3>
            </Row>
            
            <Row md={4}>
                <Col>
                <img src={tech}></img>
                </Col>
                <Col>
                <Col>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>كود الفني</Form.Label>
                    <Form.Control type="text"/>
                    </Form.Group>
                 </Col>

                 <Col>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>أسم الفني</Form.Label>
                    <Form.Control type="text"/>
                    </Form.Group>
                 </Col>

                 <Col>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>عنوان الفني</Form.Label>
                    <Form.Control type="text"/>
                    </Form.Group>
                 </Col>

            </Col>


            <Col>
                <Col>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>رقم الهاتف</Form.Label>
                    <Form.Control type="text"/>
                    </Form.Group>
                 </Col>

                 <Col>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>السن</Form.Label>
                    <Form.Control type="text"/>
                    </Form.Group>
                 </Col>

                 <Col>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>تاريخ التوظيف</Form.Label>
                    <Form.Control type="text"/>
                    </Form.Group>
                 </Col>
            </Col>

            <Col>
            <Button id="Button"variant="primary">أضافه</Button>
            </Col>
            </Row>
            <Row>
            <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Technician code</th>
                        <th>Technician name</th>
                        <th>Technician address</th>
                        <th>Mobile number</th>
                        <th>Age</th>
                        <th>Hiring date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mohamed ali</td>
                        <td>14 Nasr city</td>
                        <td>0115598595</td>
                        <td>25</td>
                        <td>1/1/2020</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Mostafa Kamel</td>
                        <td>14 Al rehab </td>
                        <td>015595555</td>
                        <td>29</td>
                        <td>1/5/2020</td>
                        </tr>


                    </tbody>
                    </Table>
                    </Row>
        </div>
    );
}