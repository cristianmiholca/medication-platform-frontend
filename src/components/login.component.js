import React from "react";
import Form from "react-validation/build/form";
import AuthService from "../services/auth/auth-service";
import {withRouter} from "react-router-dom";
import {Button, Card, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import CardBody from "reactstrap/es/CardBody";
import CardHeader from "reactstrap/es/CardHeader";

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
            message: ""
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            message: ""
        });

        let checkBtn = document.getElementById("logInButton");
        console.log(checkBtn.textContent);

        AuthService.login(this.state.username, this.state.password)
            .then(() => {
                    this.props.history.push('/profile');
                    window.location.reload();
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) || error.message || error.toString();
                    this.setState({
                        message: resMessage
                    });
                })
    }

    render() {
        return (
            <Card bg="dark" text="white">
                <CardHeader>
                    Log In
                </CardHeader>
                <CardBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <FormLabel>Username</FormLabel>
                            <FormControl id="usernameFormControl"
                                         placeholder="Enter username here"
                                         onChange={this.onChangeUsername}
                                         required/>
                            <FormControl.Feedback type="invalid">Please provide your username</FormControl.Feedback>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Password</FormLabel>
                            <FormControl id="passwordFormControl"
                                         type="password"
                                         placeholder="Enter password here"
                                         onChange={this.onChangePassword}
                                         required/>
                        </FormGroup>

                        <Button id="logInButton"
                                type="submit">
                            LogIn
                        </Button>
                    </Form>
                </CardBody>
            </Card>
        );
    }
}

export default withRouter(Login);