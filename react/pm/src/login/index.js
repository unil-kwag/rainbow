import React from "react";
import "./index.css";
import { Form, Button } from "antd";
import MainPage from "../main";
import { Link } from "react-router-dom";

function LoginPage({ location }) {
  const [userid, setuserid] = React.useState("");

  return (
    <div>
      <form id="login">
        <div id="idname">로그인</div>
        <div id="id">
          <input
            class="userbox"
            type="text"
            name="userid"
            placeholder="아이디를 입력하세요"
            onChange={(e) => setuserid(e.target.value)}
          />
        </div>
        <div id="password">
          <input
            class="pw"
            type="password"
            name="userpassword"
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        <div id="box">
          <Link to={{ pathname: "/", user_id: userid }}>
            <input
              onClick={() => location.test(userid)}
              type="button"
              value="로그인"
            />
          </Link>
          <Link to={{ pathname: "/join" }}>
            <input
              onClick={() => location.test(userid)}
              type="button"
              value="회원가입"
            />
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
