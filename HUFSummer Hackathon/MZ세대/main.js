/* 7 image random change - background */ 
let randomNumber = Math.floor(Math.random() * 7) + 1;
document.querySelector('.img-box1 img').setAttribute('src', '/images/image' + randomNumber + '.jpg');
document.querySelector('.img-box2 img').setAttribute('src', '/images/image' + randomNumber + '.jpg');

    
/* page change */
function homeBtn()  {
    window.location.href = 'http://127.0.0.1:5500/index.html';
    place.length = 0;
};

function startBtn()  {
    window.location.href = 'http://127.0.0.1:5500/sub_input.html';
    place.length = 0;
};

function resultBtn() {
    window.location.href = 'http://127.0.0.1:5500/sub_result.html';
};

/* input value change */
function saveBtn() {
    /* save 버튼을 클릭하면 result화면의 departure, destination 글씨가 입력받은 값으로 바뀜 */
};