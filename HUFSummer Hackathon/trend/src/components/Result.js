import { useParams } from "react-router-dom";

function Result() {
  const score = useParams().score;
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
