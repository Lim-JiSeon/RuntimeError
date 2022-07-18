import { useParams } from "react-router-dom";

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
  return <div>{contents}</div>;
}

export default Result;
