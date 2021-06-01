import React from "react";
import axios from "axios";

import "./index.css";

function UploadPage({ location }) {
  // console.log(location.state.test);

  const onKeyUp = (event) => {
    console.log(event);
  };

  const [menu, setmenu] = React.useState([]);
  React.useEffect(function () {
    axios
      .get("http://127.0.0.1:8000/menu/")
      .then(function (result) {
        const menu = result.data;
        console.log("success");
        setmenu(menu);
      })
      .catch(function (error) {
        console.log("fail");
      });
  }, []);
  if (menu.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="menu_table">
      {menu.map(function (menus, index) {
        return (
          <div id="divv">
            <p id="create">{menu[0].create_at}</p>
            <p>음식 이름 : {menus.name} </p>
            <p>음식 가격 : {menus.price}원</p>
          </div>
        );
      })}
      <form>
        <input type="date"></input>
        <input type="submit" value="Submit"></input>
        <button style={{ width: "100px", height: "100px" }}>button</button>
      </form>
      <input onKeyDown={onKeyUp}></input>
    </div>
  );
}

export default UploadPage;
