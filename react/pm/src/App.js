import logo from "./logo.svg";
import "./App.css";
import UploadPage from "./upload";
import MainPage from "./main";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

function App() {
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
            <p>식단을 부탁해</p>
            <button>
              <Avatar shape="square" size={40} icon={<UserOutlined />} />1 님
              안녕하세요!
            </button>
          </div>
        </section>
      </header>

      <main>
        <MainPage></MainPage>
        {/* <UploadPage></UploadPage> */}
      </main>

      <footer>
        <section>
          <div id="footer">
            <div>만든 이: 편도준, 김도영, 심명진, 곽운일 Copyright Team 2</div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
