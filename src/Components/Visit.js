import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import Button from 'react-bootstrap/Button'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import searchicon from '../assets/img/searchicon.png';
import '../Style/Visit.css'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
      margin: {
        margin: theme.spacing(1),
      },
      button: {
        margin: theme.spacing(1),
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 220,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
  }),
);

export default function Visit() {
  const classes = useStyles();
  const currentdate=new Date().toLocaleDateString();
  const currenttime=new Date().toLocaleTimeString();

  
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });  

  };
  return (
    <div>
        <br></br>
        <br></br>
        <br></br><br></br>
        <br></br>
        <br></br>
        <Container>
          <Row>
        
            <img id="searchimg"src={searchicon}></img>
            <Col>
            <h6 id="header">Search by mobile number or chasis number</h6>
            </Col>
          <Col>
          <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
         </Col>

         <Col>
         <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Chasis Number</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
         </Col>
         <Col>
         <Button id="newcar-btn" variant="primary" href="/SignUp">Search</Button>
            <Button id="newcar-btn" variant="danger" href="/SignUp">Add new car</Button>
         </Col>
          </Row>
          <hr></hr>
          <Row md={4}>
          <Col>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Car Type</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Bmw</option>
              <option>Kia</option>

            </Form.Control>
          </Form.Group>
         </Col>
         <Col>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Car Model</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>x6</option>
              <option>x2</option>
            </Form.Control>
          </Form.Group>
         </Col>
         <Col>
              <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Motor Number</Form.Label>
          <Form.Control type="text" readOnly/>
        </Form.Group>
        </Col>
        <Col>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Kilometers</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        </Col>
          </Row>
        <Row md={4}>
          <Col>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Visit Reason</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>كهرباء</option>
              <option>ميكانيكا</option>
            </Form.Control>
          </Form.Group>
          </Col>
          <Col>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Another reason</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        </Col>
        <Col>
        <DropdownMultiselect className="dropdown"
        options={["Mohamed Ali", "Ahmed Ali", "Ali ahmed", "Mostafa"]}
        name="techincain"
        placeholder="Assign Technician"
      />
      </Col>
          <Col>
            <form className={classes.container} noValidate>
                <TextField
                    id="datetime-local"
                    label="Select Start date and time"
                    type="datetime-local"
                    defaultValue={currentdate}
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                  </form>
                  </Col>
            </Row>
            <br></br>
            <br>
            </br>
            <Row md={2}>
                <Col>
                <TextareaAutosize id="textarea" aria-label="minimum height" rowsMin={3} placeholder="diagnosis" />
                </Col>
            <Col>
            <TextareaAutosize id="textarea" aria-label="minimum height" rowsMin={3} placeholder="Client Complaint" />
            </Col>
            <Col>
            <Button variant="primary" id="btn-visit" href="/VisitDetalis">Start visit</Button></Col>
  
            </Row>
          
            </Container>  

    </div>
  );
}