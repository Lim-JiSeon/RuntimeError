import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import initImage1 from "../images/image1.jpg";
import initImage2 from "../images/image2.jpg";
import initImage3 from "../images/image3.jpg";
import initImage4 from "../images/image4.jpg";
import initImage5 from "../images/image5.jpg";
import initImage6 from "../images/image6.jpg";
import initImage7 from "../images/image7.jpg";

function Input() {
  function onSubmitHandler(e) {
    e.preventDefault();
    const addr = `/result?start=${e.target.start.value}&arrive=${e.target.arrive.value}`;
    window.location.href = addr;
  }

  /* 7 image random change - background */
  const randomNumber = Math.floor(Math.random() * 7);
  const arrayImage = [
    initImage1,
    initImage2,
    initImage3,
    initImage4,
    initImage5,
    initImage6,
    initImage7,
  ];
  const imgBox = arrayImage[randomNumber];

  return (
    <div id="container1">
      <div id="img-box1">
        <img src={imgBox} alt="배경이미지1" />
      </div>

      <div id="img-box2">
        <img src={imgBox} alt="배경이미지2" />
        <span id="title">Travel &nbsp;</span>
        <div id="container2">
          <form onSubmit={onSubmitHandler}>
            <input type="text" placeholder="start place" name="start"></input>
            <input type="text" placeholder="arrive place" name="arrive"></input>
            <br></br>
            <button type="submit" id="start-btn">
              <FontAwesomeIcon icon={faPaperPlane} size="2x" />
              <span id="save">Start &nbsp;</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Input;

/*

*/
