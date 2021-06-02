import React from "react";
import "./index.css";
import { Form, Button } from "antd";

function LoginPage() {
  return (
    <div id="Lp">
      <form id="login">
        <div id="idname">로그인</div>
        <div id="id">
          <input
            class="userbox"
            type="text"
            name="userid"
            placeholder="아이디를 입력하세요"
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
          <Button id="loginbox" type="primary">
            로그인
          </Button>
          <Button id="pwbox" type="primary">
            회원가입
          </Button>
        </div>
        {/* <script src="login.js"></script> */}
      </form>
    </div>
  );
}

export default LoginPage;
