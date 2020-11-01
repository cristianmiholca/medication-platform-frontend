import React from "react";
import {Button, Form, Modal, Nav, Navbar} from "react-bootstrap";
import Login from "./login.component";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.handleShowLogIn = this.handleShowLogIn.bind(this);
        this.handleHideLogIn = this.handleHideLogIn.bind(this);

        this.state = {
            showLogIn: false,

        };
    }

    handleShowLogIn() {
        this.setState({
                showLogIn: true
            }
        )
    }

    handleHideLogIn() {
        this.setState({
                showLogIn: false
            }
        )
    }

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="/home">Home</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav>
                        <Form inline>
                            <Button variant="outline-success"
                                    onClick={this.handleShowLogIn}>Log In</Button>
                            <Modal show={this.state.showLogIn} onHide={this.handleHideLogIn}>
                                <Login/>
                            </Modal>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Home;