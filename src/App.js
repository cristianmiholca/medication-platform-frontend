import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './components/home.component'
import React from "react";
import Login from "./components/login.component";
import Profile from "./components/profile.component";
import AuthService from "./services/auth/auth-service";
import Register from "./components/register.component";
import HomeDoctor from "./components/doctor/home-doctor.component";
import PatientsContainer from "./components/patient/patients-container.component"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            currentUser: undefined
        }
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: user
            })
        }
    }

    logOut() {
        AuthService.logout();
    }

    render() {
        const {currentUser} = this.state;

        return (
            <div>
                <Router>
                    <Switch>

                        <Route
                            exact
                            path='/'
                            render={() => <Home/>}
                        />

                        <Route
                            exact
                            path='/home'
                            render={() => <Home/>}
                        />

                        <Route
                            exact
                            path='/login'
                            render={() => <Login/>}
                        />
                        <Route
                            exact
                            path='/profile'
                            render={() => <Profile/>}
                        />
                        <Route
                            exact
                            path='/doctor/home'
                            render={() => <HomeDoctor/>}
                        />

                        <Route
                            exact
                            path='/doctor/patients'
                            render={() => <PatientsContainer/>}
                        />

                    </Switch>
                </Router>
            </div>);

    }
}

export default App;
