import "../css/style.css";
import "../css/font.css";

function BasisTest() {
  function onSubmitHandler(e) {
    e.preventDefault();

    let count = 0;
    for (let i = 0; i < e.target.elements.length; i++) {
      if (e.target.elements[i].value === "1" && e.target.elements[i].checked)
        count++;
    }
    window.localStorage.setItem("score", count);
    window.location.replace("/result/" + count);
  }
  return (
    <div className="test">
      <div className="top">
        <h1 className="title">제로 웨이스트 테스트</h1>
        <h2 className="intro">
          "나는 제로 웨이스트? 아니면 레스 웨이스트?" TEST <br />
          우리집 쓰레기가 0인 지구를 지키는 제로 웨이스트! <br />
          내가 할 수 있는 것부터 실천하는 레스 웨이스트! <br />
          환경에 대해서 좀 더 관심을 기울이는게 필요한 환경새싹!
          <br />
          과연 당신은 어떤 타입일까요?
        </h2>
      </div>

      <div className="inner">
        <div className="select">
          <form onSubmit={onSubmitHandler}>
            <p>STEP 1. 거절하기</p>
            1) 요기요나 배민에서 일회용 수저,포크 안받기를 일상적으로 하나요?
            <br />
            <input type="radio" name="step1-1" value={1} />
            <span>"일회용품 그게뭐임? 그런거 안 받고 집에 있는거 쓴다"</span>
            <input type="radio" name="step1-1" value={0} />
            <span>"일회용품 필요하지 않아도 일단 받고 본다"</span>
            <br />
            <br />
            2) 가게에서 물건을 살 때 종이영수증 발급을 거절하나요?
            <br />
            <input type="radio" name="step1-2" value={1} />
            "종이영수증은 어차피 버릴거니까 안받는다"
            <input type="radio" name="step1-2" value={0} />
            "버릴거지만 그래도 종이영수증은 꼭 받는다"
            <p>STEP 2. 줄이기</p>
            3) 카페에 갈 때 텀블러를 들고 가나요?
            <br />
            <input type="radio" name="step2-1" value={1} />
            "텀블러 가져가면 백원도 빼주는데 텀블러 들고가면 일석이조"
            <input type="radio" name="step2-1" value={0} />
            "텀블러 무거우니까 그냥 일회용 컵에 주세요"
            <br />
            <br />
            4) 시장이나 마트에 갈 때 장바구니를 가져가나요?
            <br />
            <input type="radio" name="step2-2" value={1} />
            "비닐봉지 또 사서 버리는 것보단 장바구니 들고 가는게 낫지"
            <input type="radio" name="step2-2" value={0} />
            "장바구니는 들고 가기 귀찮으니까 마트가서 비닐봉지 산다"
            <p>STEP 3. 다시쓰기</p>
            5) 다 쓴 화장품 공병이나 소스 병 등을 재사용하나요?
            <br />
            <input type="radio" name="step3-1" value={1} />
            "공병은 버리기에 너무 아까우니까 세척해서 다시 쓴다"
            <input type="radio" name="step3-1" value={0} />
            "그냥 새 병 사면 되는데 뭐하러 다시 씀? 그냥 버린다"
            <br />
            <br />
            6) 당근마켓이나 중고나라를 적극적으로 활용하나요?
            <br />
            <input type="radio" name="step3-2" value={1} />
            "버리기엔 아까운 물건 당근하면 돈도 벌 수 있어서 중고거래 자주한다"
            <input type="radio" name="step3-2" value={0} />
            "쓰다 버리기에는 좀 아깝긴 하지만 그래도 버린다"
            <p>STEP 4. 재활용하기</p>
            7) 페트병 분리수거할 때 라벨을 제거하나요?
            <br />
            <input type="radio" name="step4-1" value={1} />
            "페트병 분리수거할 때 라벨 제거는 필수 아닌가요?"
            <input type="radio" name="step4-1" value={0} />
            "라벨 제거하기 귀찮을 때도 있어서 라벨 붙은 상태로 버릴 때도 있다"
            <br />
            <br />
            8) 업사이클링이 무엇인지 아시나요?
            <br />
            <input type="radio" name="step4-2" value={1} />
            "업사이클링 당연히 안다. 나도 옷으로 새로운 물건 만들어본 적 있다"
            <input type="radio" name="step4-2" value={0} />
            "업사이클링? 처음 들어본다. 그게뭐임?"
            <p>STEP 5. 썩히기</p>
            9) 생분해 플라스틱을 써본 적이 있나요?
            <br />
            <input type="radio" name="step5-1" value={1} />
            "당연하지. 생분해 플라스틱으로 만들어진 물티슈와 비누 사용해보았다"
            <input type="radio" name="step5-1" value={0} />
            "생분해 플라스틱? 생소하다. 그런게 있었나?"
            <br />
            <br />
            10) 미세플라스틱이 함유되지 않은 천연 제품을 써본 적이 있나요?
            <br />
            <input type="radio" name="step5-2" value={1} />
            "미세플라스틱 프리인 수세미나 천연스크럽 사용해봤다"
            <input type="radio" name="step5-2" value={0} />
            "천연 제품이 환경에 좋은 건 알지만 미세 플라스틱 제품을 쓰는 편이다"
            <br />
            <br />
            <input type="submit" value="완료" />
            <input type="reset" value="리셋" />
            <br />
            <br />
            <br />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}

export default BasisTest;
