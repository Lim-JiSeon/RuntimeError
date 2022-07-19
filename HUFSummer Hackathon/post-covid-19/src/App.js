import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("----");

  function onGeoOk(position) {
    const lat = position.coords.latitude; //위도
    const lon = position.coords.longitude; //경도
    const API_KEY = //API키
      "nO7U3TejJ3ACvsxWhvtZA6g5DT2p5cpwu%2BylHRd5ST9uyM9G3G9eLNFlFYqQL7Vm0KgKIG4SlfUYVbDfJJACqA%3D%3D";
    const url =
      //API 정보를 받아낼 url
      `https://apis.data.go.kr/B551182/hospInfoService1/getHospBasisList1?serviceKey=${API_KEY}&xPos=${lon}&yPos=${lat}&radius=3000`;

    fetch(url)
      .then((response) => response.text())
      .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
      .then((data) => {
        //data에는 반경 3000미터 내 병원들의 정보가 xml 형식으로 담겨있다.
        console.log(data);
        setData(data.querySelector("item yadmNm").innerHTML);
      });
  }
  function onGeoError() {
    alert("gps error");
  }

  return (
    <div>
      <header>
        <span id="title">Find Nearby Hospital</span>
        <div id="content">
          Hello, this website shows a list of hospitals within 3km based on your location.{"\n"}
          Click the button to find the coordinates where you're currently located and look for a nearby hospital based on them.
        </div>
      </header>
      
      {data}
      <div className="div-btn">
        <button id="find-btn"
          onClick={() => {
            //버튼이 클릭되면 현재 좌표를 찾는다. 찾았으면 해당 좌표를 인자로 onGeoOk 함수를 실행한다.
            //onGeoOk 함수에서는 주어진 좌표에 가까운 병원을 찾아낸다.
            navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
          }}
        >
          <i class="fa-regular fa-hospital fa-10x"></i>
          <span>Click</span>
        </button>
      </div>
    </div>
  );
}

export default App;
