import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerWrap">
        <div className="footerTopWrap">
            <ul className="footerTop1">
                <li>회사소개</li>
                <li>이용약관</li>
                <li className='footerColorPonint'>개인정보처리방침</li>
                <li>멤버십안내</li>
                <li>고객센터</li>
                <li>매장찾기</li>
                <li>공지사항</li>
                <li>단체주문</li>
            </ul>
            <ul className="footerTop2">
                <li>입점신청</li>
                <li>제휴문의</li>
                <li>입점대여프로그램</li>
            </ul>
        </div>
        </div>
        <div className="footerBtWrap">
            <p>삼성물산 (주) 패션부문</p>
            <ul className="footerBt2">
                <li>
                    <ul className='footerBtInfo'>
                        <li>주소 : 서울특별시 강남구 남부순환로 2806&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</li>
                        <li>대표 : 오세철 외 2명&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</li>
                        <li>사업자 등록번호 : 101-85-43600&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</li>
                        <li>통신판매업 신고번호 : 제 2015-서울강남-02894</li>
                    </ul>
                </li>
                <li>KG모빌리언스 구매안전 서비스 서비스 가입 사실 확인 고객님의 안전 거래를 위해 현금 등으로 5만원이상 결제 시 저희 쇼핑몰에서 가입한 구매안전 서비스를 이용하실 수 있습니다.</li>
                <li>대표전화 1599-0007(전국) 080-700-1472(수신자부담)</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer