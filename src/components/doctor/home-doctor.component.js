import React from "react";
import {Button, Form, Modal, Nav, Navbar} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import AuthService from "../../services/auth/auth-service";
import {withRouter} from "react-router-dom";

class HomeDoctor extends React.Component {

    constructor(props) {
        super(props);
    }

    logOut() {
        AuthService.logout();
        this.props.history.push("/home");
        window.location.reload();
    }

    render() {

        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="/doctor/home">Home</Navbar.Brand>
                    <NavbarCollapse>
                        <Nav className="mr-auto">
                            <Nav.Link href="/doctor/patients">Patients</Nav.Link>
                            <Nav.Link href="/doctor/caregiver">Caregivers</Nav.Link>
                            <Nav.Link href="/doctor/medical-records">Medical Records</Nav.Link>
                        </Nav>

                        <Form inline>
                            <Button variant="outline-success"
                                    onClick={this.logOut}
                                    href="/home">
                                Log Out
                            </Button>
                        </Form>
                    </NavbarCollapse>
                </Navbar>
            </div>
        );

    }
}

export default HomeDoctor;