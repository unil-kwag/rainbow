import React from "react";
import "./index.css";
import MainPage from "../main";
import { Link } from "react-router-dom";

function LoginPage({ location }) {
  const [userid, setuserid] = React.useState("");


  return (
    <div>
      <form id="login">
        <p>
          아이디
          <input
            className="userbox"
            type="text"
            onChange={(e) => setuserid(e.target.value)}
          />
        </p>
        <p>
          패스워드
          <input className="userbox" name="userpassword" />
        </p>
        <div id="box">
          <Link to={{ pathname: "/", user_id: userid }}>
            <input
              onClick={() => location.test(userid)}
              type="button"
              value="로그인"
            />
          </Link>
          <input type="button" value="회원가입" />
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
