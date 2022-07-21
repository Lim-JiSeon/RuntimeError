import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

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
        <div id='container2'>
            <div id="input">
                <div id="departure">
                    <input id='start' type="text" placeholder="start place"></input>
                </div>
                <div id="destination">
                    <input id='arrive' type="text" placeholder="arrive place"></input>
                </div>
            </div>
                
            <div id="start-div">
                <button type="submit" id="start-btn">
                    <FontAwesomeIcon icon={faPaperPlane} size="2x"/>
                    <span id="save">Start &nbsp;</span>
                </button>
            </div>
        </div>
    );
}

export default Input;


/*

*/
