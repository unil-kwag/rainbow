import React from "react";
import axios from "axios";
import "./index.css";

function HistoryPage({ location }) {
  const [menuname, setmenuname] = React.useState("");
  const [menuprice, setmenuprice] = React.useState();
  const [menuea, setmenuea] = React.useState();

  const submithandle = (event) => {
    alert("등록 완료!");
    axios
      .post("http://127.0.0.1:8000/menu/", {
        menu_id: location.user_id,
        name: menuname,
        price: menuprice,
        ea: menuea,
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
      <form id="history" onSubmit={submithandle}>
        <input
          id="name"
          type="text"
          placeholder="이름"
          value={menuname}
          onChange={(e) => setmenuname(e.target.value)}
        ></input>
        <input
          id="price"
          type="number"
          placeholder="가격"
          value={menuprice}
          onChange={(e) => setmenuprice(e.target.value)}
        ></input>
        <input
          id="count"
          type="text"
          placeholder="개수"
          value={menuea}
          onChange={(e) => setmenuea(e.target.value)}
        ></input>
        <button id="button">등록</button>
      </form>
    </div>
  );
}
export default HistoryPage;
