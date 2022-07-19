/* 7 image random change - background */ 
let randomNumber = Math.floor(Math.random() * 7) + 1;
document.querySelector('.img-box1 img').setAttribute('src', './images/image' + randomNumber + '.jpg');
document.querySelector('.img-box2 img').setAttribute('src', './images/image' + randomNumber + '.jpg');

    
/* page change */
function homeBtn()  {
    window.location.href = 'index.html';
    place.length = 0;
};

function startBtn()  {
    window.location.href = 'sub_input.html';
    place.length = 0;
};

function resultBtn() {
    window.location.href = 'sub_result.html';
};

/* input value change */
function saveBtn() {
    /* save 버튼을 클릭하면 result화면의 departure, destination 글씨가 입력받은 값으로 바뀜 */
    window.location.href = 'sub_result.html';
    const start=document.getElementById('start').value;
    document.getElementById("result1").innerText=start;

    const arrive=document.getElementById('arrive').value;
    document.getElementById("result2").innerText=arrive;
};
