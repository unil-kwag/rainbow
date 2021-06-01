import React from "react";
import axios from "axios";

function UpdatePage({ location }) {
  const id = String(location.state.id);
  const m_id = location.state.mid;
  const [menuname, setmenuname] = React.useState("");
  const [menuprice, setmenuprice] = React.useState();
  const [menuea, setmenuea] = React.useState();
  const [menu, setmenu] = React.useState([]); //axios get

  React.useEffect(function () {
    axios
      .get("http://127.0.0.1:8000/menu/" + location.state.id + "/")
      .then(function (result) {
        const menu = result.data;
        setmenu(menu);
        console.log("success");
      })
      .catch(function (error) {
        console.log("fail");
      });
  }, []);
  if (menu.length === 0) {
    return <div>Loading...</div>;
  }

  const onupdate = () => {
    alert("수정 완료!");

    axios
      .put("http://127.0.0.1:8000/menu/" + id + "/", {
        menu_id: m_id,
        name: menuname,
        price: menuprice,
        ea: menuea,
      })
      .then(function (result) {
        console.log(menuname);
        console.log(result);
      })
      .catch(function (error) {
        console.log(error);
      });
    window.location.reload();
  };

  return (
    <div>
      <div id="divv">
        <p id="create">{menu.create_at}</p>
        <p>음식 이름 : {menu.name}</p>
        <p>음식 가격 : {menu.price}원</p>
        <p>{menu.ea} 인분</p>
      </div>

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
      <button
        style={{ width: "100px", height: "50px" }}
        onClick={onupdate}
      >수정</button>
    </div>
  );
}
export default UpdatePage;
