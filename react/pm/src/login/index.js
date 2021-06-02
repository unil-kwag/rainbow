import React from "react";
import "./index.css";

function LoginPage() {
  return (
    <form id="login">
      <p>
        username
        <input class="userbox" type="text" name="userid" />
      </p>
      <p>
        password
        <input class="userbox" name="userpassword" />
      </p>
      <div id="box">
        <input type="button" position value="login" />
        <input type="button" onclick="" value="join" />
        <input type="reset" value="reset" />
      </div>
      {/* <script src="login.js"></script> */}
    </form>
  );
}

export default LoginPage;
