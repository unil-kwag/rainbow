import React from "react";
import axios from "axios";
import { Form, Button } from "antd";
import MainPage from "../main";
import "./index.css";
import { Link } from "react-router-dom";

function JoinPage() {
  const [userid, setuserid] = React.useState("");
  const [username, setusername] = React.useState("");
  const [userheight, setuserheight] = React.useState("");
  const [userweight, setuserweight] = React.useState("");
  const [useremail, setuseremail] = React.useState("");

  function test() {
    console.log(typeof username);
    console.log(typeof userid);
    console.log(typeof parseFloat(userheight));
    console.log(typeof userweight);
    console.log(typeof useremail);
  }
  const submithandle = (event) => {
    alert("등록 완료!");
    axios
      .post("http://127.0.0.1:8000/user/", {
        user_id: userid,
        name: username,
        height: userheight,
        weight: userweight,
        emaill: useremail,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <form id="login" onSubmit={submithandle}>
        <div id="rname">회원가입</div>
        <div id="id">
          <input
            class="userbox"
            type="text"
            name="userid"
            placeholder="아이디를 입력하세요"
            value={userid}
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
            value={username}
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
            value={userheight}
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
            value={userweight}
            onChange={(e) => setuserweight(e.target.value)}
          />
        </div>
        <div id="email">
          <input
            class="userbox"
            type="email"
            name="useremail"
            placeholder="이메일을 입력하세요"
            value={useremail}
            onChange={(e) => setuseremail(e.target.value)}
          />
        </div>
        <button style={{ width: "100%" }} id="button">
          등록
        </button>
      </form>
    </div>
  );
}

export default JoinPage;
