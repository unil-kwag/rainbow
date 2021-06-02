import React from "react";
import { Form, Button } from "antd";
import MainPage from "../main";
import "./index.css";
import { Link } from "react-router-dom";

function JoinPage({ location }) {
  const [userid, setuserid] = React.useState("");
  const [username, setusername] = React.useState("");
  const [userheight, setuserheight] = React.useState("");
  const [userweight, setuserweight] = React.useState("");
  const [useremail, setuseremail] = React.useState("");
  return (
    <form id="login">
      <div id="rname">회원가입</div>
      <div id="id">
        <input
          class="userbox"
          type="text"
          name="userid"
          placeholder="아이디를 입력하세요"
          onChange={(e) => setuserid(e.target.value)}
        />
      </div>
      {/* <div id="pw"> */}
      {/* <input
          class="userbox"
          type="password"
          name="userpw"
          placeholder="비밀번호를 입력하세요"
          onChange={(e) => setuserid(e.target.value)}
        /> */}
      {/* </div> */}
      <div id="name">
        <input
          class="userbox"
          type="text"
          name="username"
          placeholder="이름를 입력하세요"
          onChange={(e) => setusername(e.target.value)}
        />
      </div>
      <div id="height">
        <input
          class="userbox"
          type="number"
          name="userheight"
          step="1"
          placeholder="키를 입력하세요"
          onChange={(e) => setuserheight(e.target.value)}
        />
      </div>
      <div id="weight">
        <input
          class="userbox"
          type="number"
          name="userweight"
          step="1"
          placeholder="몸무게를 입력하세요"
          onChange={(e) => setuserweight(e.target.value)}
        />
      </div>
      <div id="email">
        <input
          class="userbox"
          type="email"
          name="useremail"
          placeholder="이메일을 입력하세요"
          onChange={(e) => setuseremail(e.target.value)}
        />
      </div>
      <div id="box">
        <Link to={{ pathname: "/", user_id: userid }}>
          <input
            onClick={() => location.test(userid)}
            type="button"
            value="submit"
          />
        </Link>
        <input type="reset" value="reset" />
      </div>
      {/* <script src="login.js"></script> */}
    </form>
  );
}

export default JoinPage;
