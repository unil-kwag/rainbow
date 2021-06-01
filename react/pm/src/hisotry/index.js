import React from "react";
import axios from "axios";
function HistoryPage() {
  const [menuname, setmenuname] = React.useState("");
  const [menuprice, setmenuprice] = React.useState();
  const [menuea, setmenuea] = React.useState();
  //   const changehandle = (e) => {
  //     console.log("hello");
  //   };
  const clickhandle = () => {};

  const submithandle = (event) => {
    alert("등록 완료!");
    axios
      .post("http://127.0.0.1:8000/menu/", {
        menu_id: "1",
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

    console.log(menuname, menuprice, menuea);
  };
  return (
    <div>
      <form onSubmit={submithandle}>
        <input
          type="text"
          placeholder="이름"
          value={menuname}
          onChange={(e) => setmenuname(e.target.value)}
        ></input>
        <input
          type="number"
          placeholder="가격"
          value={menuprice}
          onChange={(e) => setmenuprice(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="개수"
          value={menuea}
          onChange={(e) => setmenuea(e.target.value)}
        ></input>
        <button type="submit">등록</button>
      </form>
    </div>
  );
}
export default HistoryPage;
