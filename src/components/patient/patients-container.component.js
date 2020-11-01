import React from "react";
import CardHeader from "reactstrap/es/CardHeader";
import CardBody from "reactstrap/es/CardBody";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import PatientService from "../../services/data/patient-service"

class PersonContainer extends React.Component {

    constructor(props) {
        super(props);
        this.renderPatient = this.renderPatient.bind(this);

        this.state = {
            addPersonBtnClicked: false,
            deletePersonBtnClicked: false,
            tableData: [],
            isLoaded: true
        };
    }

    componentDidMount() {

        

    }

    renderPatient(patient, index) {
        return (
            <tr key={index}>
                <td>{patient.name}</td>
                <td>{patient.birthDate}</td>
                <td>{patient.gender}</td>
                <td>{patient.address}</td>
                <td>{patient.caregiver}</td>
            </tr>
        )
    }

    render() {

        return (
            <div>
                <Card>
                    <CardHeader>
                        <strong>Patients Management</strong>
                    </CardHeader>

                    <CardBody>
                        <br/>
                        <Row>
                            <Col sm={{size: '8', offset: 1}}>
                                <Button variant="primary">Add patient</Button>
                                {' '}
                                <Button variant="danger">Delete patient</Button>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col sm={{size: '8', offset: 1}}>
                                {this.state.isLoaded &&
                                <Table variant="dark" striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Birth Date</th>
                                        <th>Gender</th>
                                        <th>Address</th>
                                        <th>Caregiver</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.tableData.map(this.renderPatient)}
                                    </tbody>
                                </Table>}
                            </Col>
                        </Row>

                    </CardBody>
                </Card>

            </div>
        );

    }
}

export default PersonContainer;