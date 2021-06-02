import React from "react";
import "./index.css";

function JoinPage() {
  return (
    <form id="login">
      <p>
        id
        <input class="userbox" type="text" />
      </p>
      <p>
        name
        <input class="userbox" type="text" />
      </p>
      <p>
        height
        <input class="userbox" type="number" step="0.01" />
      </p>
      <p>
        weight
        <input class="userbox" type="number" step="0.01" />
      </p>
      <p>
        email
        <input class="userbox" type="email" />
      </p>
      <div id="box">
        <input type="button" value="submit" />
        <input type="reset" value="reset" />
      </div>
      {/* <script src="login.js"></script> */}
    </form>
  );
}

export default JoinPage;
