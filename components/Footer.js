import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">에어비앤비 지원</h5>
        <p>도움말 센터</p>
        <p>에어커버</p>
        <p>안전 정보</p>
        <p>장애인 지원</p>
        <p>예약 취소 옵션</p>
        <p>에어비앤비의 코로나19 대응 방안</p>
        <p>이웃 민원 신고</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">커뮤니티</h5>
        <p>Airbnb.org:재난 구호 숙소</p>
        <p>아프간 난민 지원</p>
        <p>차별 철폐를 위한 노력</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">호스팅</h5>
        <p>호스팅 시작하기</p>
        <p>호스팅을 위한 에어커버</p>
        <p>호스팅 자료 둘러보기</p>
        <p>커뮤니티 포럼 방문하기</p>
        <p>책임감 있는 호스팅</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">에어비앤비 </h5>
        <p>뉴스룸</p>
        <p>새로운 기능에 대해 알아보기</p>
        <p>에어비앤비 공동창업자의 메시지</p>
        <p>채용정보</p>
        <p>투자자 정보</p>
      </div>
    </div>
  );
}

export default Footer;
