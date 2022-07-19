import { useState } from 'react'

function Content() {
    /* 한국어 / 영어 버전으로 바꿀 수 있는 기능 구현 */
    const enTitle = "Find Nearby Hospital";
    const enSub = "Hello, this website shows a list of hospitals within 3km based on your location.\nClick the button to find the coordinates where you're currently located and look for a nearby hospital based on them.";
    const koTitle = "가까운 병원 찾기";
    const koSub = "안녕하세요. 이 웹사이트는 여러분의 위치를 기준으로 3km 내의 가까운 병원 리스트를 보여줍니다.\n버튼을 누르면 현재 여러분의 위치를 찾은 뒤 그 위치를 기준으로 가까운 병원들을 찾습니다.";
    const enBtn = ["| English |", "| Korean |"];
    const koBtn = ["| 영어 |", "| 한국어 |"];
    
    const [content, setContent] = useState([enTitle, enSub, enBtn]);

    const changeEn = () => {
        setContent([enTitle, enSub, enBtn]);
    }

    const changeKo = () => {
        setContent([koTitle, koSub, koBtn]);
    }
    /* 메인 화면의 타이틀과 컨텐츠 부분, 버튼 2개 */
    return (
        <header>
            <div id='change-btn'>
                <button id="change-en" onClick={changeEn}>{content[2][0]}</button>
                <button id="change-ko" onClick={changeKo}>{content[2][1]}</button>
            </div>
            <span id="title">{content[0]}</span>
            <div id="content">{content[1]}</div>
        </header>
    );
  }
  
  export default Content;
  