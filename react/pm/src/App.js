import React from "react";
import { Switch, Route, Link, useHistory } from "react-router-dom";

import "antd/dist/antd.css";
import "./App.css";

import MainPageComponent from "./main";
import UploadPage from "./upload";
import ProductPage from "./product";

import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
function App() {
    const history = useHistory();
    return (
        <div>
            <header>
                <h1 className="blind">그랩 마켓</h1>
                <section>
                    <h1 className="blind">헤더</h1>
                    <div id="header">
                        <div id="header-area">
                            <Link to={"/"}>
                                <img src="/images/icons/logo.png" alt="로고" />
                            </Link>
                            <Button
                                size="large"
                                onClick={function () {
                                    history.push("/upload");
                                }}
                                icon={<DownloadOutlined />}
                            >
                                상품 업로드
                            </Button>
                        </div>
                    </div>
                </section>
            </header>
            <Switch>
                <Route exact={true} path="/">
                    <MainPageComponent />;
                </Route>
                <Route exact={true} path="/product/:id">
                    <ProductPage />
                </Route>
                <Route exact={true} path="/upload">
                    <UploadPage />
                </Route>
            </Switch>
            <footer>
                <section>
                    <h1 className="blind">풋터</h1>
                    <div id="footer">
                        풋터 로그
                        <div>카피라이트</div>
                    </div>
                </section>
            </footer>
        </div>
    );
}

export default App;
