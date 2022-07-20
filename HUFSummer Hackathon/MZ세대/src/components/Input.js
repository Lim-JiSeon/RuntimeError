import logo from './logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import './App.css';

function Input() {
   
    function saveBtn() {
        /* save 버튼을 클릭하면 result화면의 departure, destination 글씨가 입력받은 값으로 바뀜 */
        window.location.href = 'sub_result.html';
        const start=document.getElementById('start').value;
        document.getElementById("result1").innerText=start;

        const arrive=document.getElementById('arrive').value;
        document.getElementById("result2").innerText=arrive;
    };

    return (
        <div>

        </div>
    );
}

export default Input;


/*

*/
