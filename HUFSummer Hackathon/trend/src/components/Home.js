import zerowaste from "../img/zerowaste.png";
import zerobutton1 from "../img/zerobutton1.png";
import zerobutton2 from "../img/zerobutton2.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <img
          src={zerowaste}
          alt="나는 zero waste위해서 어떠한 실천을 하고 있을까? 
            나의 5R(refuse, reduce, reuse, recycle, rot)에 대해 테스트 해보고
            환경을 위해 할 수 있는 것이 무엇이 있는지 알아봅시다. 
            환경지킴이 바로 당신이 될 수있습니다!!"
          width="100%"
        />
      </div>
      <div>
        <Link to="/basis-test">
          <img src={zerobutton1} alt="zerobutton1" width="80%" />
        </Link>
        <Link to="/result">
          <img src={zerobutton2} alt="zerobutton2" width="80%" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
