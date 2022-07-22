import { useParams } from "react-router-dom";
import zerowasteIcon from "../img/zerowaste-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faSeedling } from "@fortawesome/free-solid-svg-icons"
import { faFeatherPointed } from "@fortawesome/free-solid-svg-icons"

function Result() {
  let score = useParams().score;
  if (score == null) {
    score = window.localStorage.getItem("score");
  }
  if (score == null) {
    return <div>설문 조사를 먼저 진행해 주세요.</div>;
  }

  let contents = [<div>점수: {score}</div>];
  if (score > 7) {
    contents.push(<div>당신은 제로 웨이스트입니다!</div>);
  } else if (score > 4) {
    contents.push(<div>당신은 레스 웨이스트입니다!</div>);
  } else {
    contents.push(<div>당신은 환경 새싹입니다!</div>);
  }
  return (
    <div className="result-inner">
      <img src={zerowasteIcon} alt="icon-picture" width="100%"/>
      <div className="result">
        {contents}
      </div>

      <div className="content">
        <div id="tip-text">
          <a href="https://guide.michelin.com/kr/ko/article/sustainable-gastronomy/11-steps-towards-having-a-zero-waste-lifestyle-copy1">
            <FontAwesomeIcon icon={faFeatherPointed} size="3x"/>
            실천 방법
          </a>
        </div>
        <div id="tip-video">
          <a href="https://www.youtube.com/watch?v=nBUBwvOwCKY&t=40s">
            <FontAwesomeIcon icon={faCirclePlay} size="3x"/>
            생활 루틴
          </a>
        </div>
        <div id="tip-site">
          <a href="https://thepicker.net/">
            <FontAwesomeIcon icon={faSeedling} size="3x"/>
            추천 플랫폼
          </a>
        </div>
      </div>
    </div>
    

  );
}

export default Result;
