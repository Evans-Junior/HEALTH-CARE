import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import {Link} from "react-router-dom";

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Success" />
            <h4>Thank You For Your Submission</h4>
            <p>You will get an email with further instructions.</p>
           <div><p>Click on <Link className="home" to="/login">Login</Link> go to the Login page</p></div>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
