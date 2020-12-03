import React from 'react'
import "./Loginform.css"
import 'bootstrap/dist/css/bootstrap.min.css';



function Loginform() {
    return (
        <div className="login">
            <div class="container-sm">
  <form class="px-4 py-3">
    <div class="form-group">
      <label for="exampleDropdownFormEmail1"><h5>Email address</h5></label>
      <p>
      <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
      </p>
    </div>
    <br/>
    <div class="form-group">
      <label for="exampleDropdownFormPassword1"><h5>Password</h5></label>
      <p>
      <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
</p>
    </div>
   <p>
   <div className="form-group">
      <div class="form-check">
        <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
        <label class="form-check-label" for="dropdownCheck">
          Remember me
        </label>
      </div>
    </div>
   </p>
    <div className="buttom">
    <button type="submit" color="primary"
    variant="contained">Sign in</button>
    </div>
<h5>New around here? Sign up</h5>
  
<h5>Forgot password?</h5>
  </form>
 
</div>
        </div>
    )
}

export default Loginform;
