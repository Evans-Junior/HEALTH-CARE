import React from "react"
import "./signInpage.css"
import Loginform from "./Loginform"
import News from "./News" 


 function SignInpage(){
    return(
      <div className="signInpage">
      <div className="signInpage__body">
      <Loginform/>
      <News/>
      </div>
      </div>
    );
  }
export default SignInpage;