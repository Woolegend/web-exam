import Profile from "../Profile";

export default function NoneArray() {
  return (
    <div className="wrapper">
      <Profile
        name="Brendan Eich"
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg/500px-Brendan_Eich_Mozilla_Foundation_official_photo.jpg"
        birth="1961년 7월 4일"
        description="미국의 프로그래머이며, 프로그래밍 언어 자바스크립트의 창조자이다. 모질라 코퍼레이션에서 최고 기술 책임자를 맡았다."
      />
      <Profile
        name="John von Neumann"
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/JohnvonNeumann-LosAlamos.gif/400px-JohnvonNeumann-LosAlamos.gif"
        birth="1903년 12월 28일"
        description="은 헝가리 출신으로 미국에서 활동한 컴퓨터과학자, 수학자, 과학자, 경제학자이다. 양자 역학, 함수 해석학, 집합론, 위상수학, 컴퓨터 과학, 수치해석, 경제학, 통계학 등 여러 분야에 걸쳐 다양한 업적을 남겼다. 특히 연산자 이론을 양자역학에 접목시켰고, 맨해튼 계획과 프린스턴 고등연구소에 참여하였으며, 게임 이론과 세포 자동자의 개념을 개발한 것으로도 잘 알려져 있다."
      />
      <Profile
        name="Jeff Atwood"
        img="https://upload.wikimedia.org/wikipedia/commons/3/36/Long_Zheng%2C_Dan_Rigsby%2C_Jeff_Atwood_%282979598012%29.jpg"
        birth="1970년"
        description="미국의 소프트웨어 개발자, 작가, 블로거 및 기업가다. 그는 컴퓨터 프로그래밍 질문을 위한 스택 오버플로 웹사이트와, 이를 포함한 질문 및 답변 네트워크인 스택 익스체인지를 공동 창업했다. "
      />
    </div>
  );
}
