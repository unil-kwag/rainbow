import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./index.css";
import MenuContext from "antd/lib/menu/MenuContext";

function UploadPage({ location }) {
  console.log("location-------------- : " + location.user_id);
  const [menu, setmenu] = React.useState([]);

  const ondelete = (id) => {
    console.log(id);
    axios
      .delete("http://127.0.0.1:8000/menu/" + id + "/")
      .then(function (result) {
        console.log("success");
      })
      .catch(function (error) {
        console.log(error);
      });
    window.location.reload();
  };

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
    <div
      className="menu_table"
      style={{ maxHeight: "1024px", overflow: "auto" }}
    >
      <div id="calender">
        <form>
          <input id="date" type="date"></input>
          <input id="submit" type="submit" value="Submit"></input>
        </form>
      </div>
      <div id="contents">
        {menu.map(function (menus, index) {
          if (menus.menu_id == location.user_id) {
            return (
              <div id="divv">
                <p id="create">{menus.create_at}</p>
                <p>음식 이름 : {menus.name}</p>
                <p>음식 가격 : {menus.price}원</p>
                <p>{menus.menu_id} 인분</p>
                <button
                  id="delete"
                  onClick={(e) => ondelete(menus.id)}
                  style={{ width: "100%" }}
                >
                  삭제
                </button>
                <Link
                  to={{
                    pathname: "/update",
                    state: { id: menus.id, mid: menus.menu_id },
                  }}
                >
                  <button id="delete" style={{ width: "100%" }}>
                    수정
                  </button>
                </Link>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default UploadPage;
