import React, { Component } from "react";
import "./App.css";

class Subject extends Component {
    render() {
        return (
            <header>
                <h2>식단관리를 부탁해~!</h2>
                개인 식단관리와 식단 선택시 자동 칼로리 계산
            </header>
        );
    }
}

class TOC extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <a href="1.html">식단</a>
                    </li>
                    <li>
                        <a href="2.html">식단기록</a>
                    </li>
                    <li>
                        <a href="3.html">룰렛</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

class Content extends Component {
    render() {
        return (
            <article>
                <h2>홈페이지 안내 이미지</h2>
                (그림 넣기)
            </article>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <Subject></Subject>
                <TOC></TOC>
                <Content></Content>
            </div>
        );
    }
}

export default App;
