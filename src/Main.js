import React, { useEffect, useState } from 'react'
import "./Main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import App from "./App";
import Header from "./Header";
import About from "./About";
import SignInpage from "./Login/SignInpage";
import Profile from "./Profile";
import Pusher from "pusher-js";
import axios from "./axios";
import Feel from "./Feel"
import Signuptop from './Signuptop';


function Main() {

    const[messages, setMessages] = useState([]);

    useEffect(() => {
        axios.get("/messages/sync").then((response) => {
            setMessages(response.data).catch(function (error) {
                console.error(error);
            });
        });
         }, []);

    useEffect(() => {
        const pusher = new Pusher('dbb5096dcb8e86e9b19d', {
            cluster: 'eu'
          });
      
          const channel = pusher.subscribe('messages');
          channel.bind('inserted', (data) => {
            alert(JSON.stringify(data));
          });
    }, []);

    console.log(messages);

    return (
        <Router>
        <div className="main">
        <Switch>
        <Route exact path="/">
        <Header/>
        <Home/>
        </Route>
        <Route exact path="/About">
        <Header/>
        <About/>
        </Route>
        <Route exact path="/chat">
        <App/>
        </Route>
        <Route exact path="/login">
        <Header/>
        <SignInpage/>
        </Route>
        <Route exact path="/my-profile">
        <Header/>
        <Profile/>
        </Route>
        <Route exact path="/questions">
        <Header/>
        <Feel/>
        </Route>
        <Route exact path="/sign-up">
        <Header/>
        <Signuptop/>
        </Route>
        </Switch>
        </div>
        </Router>
    )
}

export default Main;
