import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import '../Style/Dashboard.css'
export default function Dashboard(){
    return(
        
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Order ID</th>
                        <th>Mobile</th>
                        <th>Car type</th>
                        <th>Kilometers</th>
                        <th>Services</th>
                        <th>Spare parts</th>
                        <th>Technician</th>
                        <th>Total cost</th>
                        <th>Visit Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>0115598595</td>
                        <td>BMW</td>
                        <td>10-000</td>
                        <td>مراجعه كهرباء العربيه</td>
                        <td>تغيير ترومبه</td>
                        <td>Ahmed ali</td>
                        <td>100.00</td>
                        <td>
                        <Button variant="success">Open visit</Button>
                        <Button variant="danger">End visit</Button>
                        </td>
                        </tr>
                        <tr>
                        <td>1</td>
                        <td>0115598595</td>
                        <td>BMW</td>
                        <td>10-000</td>
                        <td>مراجعه كهرباء العربيه</td>
                        <td>تغيير ترومبه</td>
                        <td>Ahmed ali</td>
                        <td>100.00</td>
                        <td>
                        <Button variant="success">Open visit</Button>
                        <Button variant="danger">End visit</Button>
                        </td>
                        </tr>


                    </tbody>
                    </Table>
        </div>
    );
}