import React from "react";
import axios from "axios";

import "./index.css";

function UploadPage({ location }) {
  // console.log(location.state.test);
  const [menu, setmenu] = React.useState([]);

  const ondelete = (id) => {
    console.log(id);
    axios
      .delete("http://127.0.0.1:8000/menu/" + id + "/")
      .then(function (result) {
        console.log(result);
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
    <div className="menu_table">
      <div id="calender">
        <form>
          <input type="date"></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
      <div id="contents">
        <list>
          {menu.map(function (menus, index) {
            return (
              <div id="divv">
                <p id="create">{menus.create_at}</p>
                <p>
                  {menus.id}
                  <br />
                  음식 이름 : {menus.name}
                </p>
                <p>음식 가격 : {menus.price}원</p>
                <button
                  id="delete"
                  onClick={(e) => ondelete(menus.id)}
                  style={{ width: "100%" }}
                >
                  삭제
                </button>
              </div>
            );
          })}
        </list>
      </div>
    </div>
  );
}

export default UploadPage;
