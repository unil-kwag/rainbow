/*eslint-disable*/
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UploadPage from "./upload";
import MainPage from "./main";
import HistoryPage from "./hisotry";
import UpdatePage from "./update";
import LoginPage from "./login";
import JoinPage from "./join";

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import {
  Switch,
  useHistory,
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import axios from "axios";
import reactDom from "react-dom";

function App() {
  const [name, setname] = React.useState([]);
  const [userid, setuserid] = React.useState("1");

  const test = (id) => {
    setuserid(id);
  };

  return (
    <div>
      <header>
        <section>
          <div id="header-area">
            <div id="rainbow-logo">
              <img
                src="https://previews.123rf.com/images/studiobarcelona/studiobarcelona1204/studiobarcelona120400016/13055203-%EB%AC%B4%EC%A7%80%EA%B0%9C%EC%9D%98-%EA%B7%B8%EB%A6%AC%EA%B8%B0-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98.jpg"
                alt="logo"
              />
              <p>Rainbow!</p>
            </div>
            <div id="header-name">
              <p>식단을 부탁해</p>
            </div>
            <button>
              <Avatar shape="square" size={40} icon={<UserOutlined />} />
              {userid} 님 안녕하세요!
            </button>
          </div>

          <div id="category">
            <p>
              <Link id="a" to={{ pathname: "/" }}>
                홈
              </Link>
            </p>
            <p>
              <Link id="a" to={{ pathname: "/upload", user_id: userid }}>
                식단
              </Link>
            </p>
            <p>
              <Link id="a" to={{ pathname: "/history", user_id: userid }}>
                식단기록
              </Link>
            </p>
            <p>
              <Link id="a" to={{ pathname: "/rullet", user_id: userid }}>
                룰렛
              </Link>
            </p>
            <p>
              <Link id="a" to={{ pathname: "/login", test: test }}>
                로그인
              </Link>
            </p>
          </div>
        </section>
      </header>

      <main>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/join" component={JoinPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/upload" component={UploadPage} />
          <Route exact path="/history" component={HistoryPage} />
          <Route exact path="/update" component={UpdatePage} />
        </Switch>
      </main>

      <footer>
        <section>
          <div id="footer">
            만든 이: 편도준, 김도영, 심명진, 곽운일 Copyright Team 2
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
