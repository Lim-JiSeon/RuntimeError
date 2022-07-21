import initImage1 from './images/image1.jpg';
import initImage2 from './images/image2.jpg';
import initImage3 from './images/image3.jpg';
import initImage4 from './images/image4.jpg';
import initImage5 from './images/image5.jpg';
import initImage6 from './images/image6.jpg';
import initImage7 from './images/image7.jpg';
import Input from "./components/Input";
import './App.css';

function App() {
  /* 7 image random change - background */ 
  const randomNumber = Math.floor(Math.random() * 7);
  const arrayImage = [initImage1, initImage2, initImage3, initImage4, initImage5, initImage6, initImage7] 
  const imgBox = arrayImage[randomNumber];

  
  return (
    <div id="container1">
      <div id="img-box1">
      <img src={imgBox} alt="배경이미지1"/>   
      </div>

      <div id="img-box2">
          <img src={imgBox} alt="배경이미지2"/>
          <span id="title">Travel &nbsp;</span>
          <Input></Input>
      </div>
    </div>
  );
}

export default App;
