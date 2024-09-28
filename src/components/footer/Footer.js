import React from 'react'
import './Footer.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faSpotify, faYoutube, faPinterest, faTiktok } from '@fortawesome/free-brands-svg-icons'



const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-menu">
                <div>
                    카테고리
                    <ul>
                        <li>Women</li>
                        <li>Men</li>
                        <li>Baby</li>
                    </ul>
                </div>
                <div>기업 정보</div>
                <div>고객 지원</div>
            </div>
            <div className="socials">
                <ul>
                    <li><FontAwesomeIcon icon={faInstagram} /></li>
                    <li><FontAwesomeIcon icon={faTiktok} /></li>
                    <li><FontAwesomeIcon icon={faSpotify} /></li>
                    <li><FontAwesomeIcon icon={faYoutube} /></li>
                    <li><FontAwesomeIcon icon={faPinterest} /></li>
                    <li><FontAwesomeIcon icon={faFacebook} /></li>
                </ul>
            </div>
            <div className="info">
                <p>이 사이트의 콘텐츠는 저작권 보호를 받고 있는 H & M Hennes & Mauritz AB의 자산입니다.</p>
                <p>법인명 에이치앤엠헤네스앤모리츠 주식회사 | 통신판매업신고번호 : 2022-서울강남-01184 / 사업자등록번호: 220-87-83339 | 아담 칼슨, 선 보라미, 아네타 포쿠친스카 |</p>
                <p>서울특별시 강남구 영동대로 421, 9층 삼탄빌딩 (대치동) 06182 | 대표번호 080-822-0220 | info.kr@hm.com</p>
                <p>사업자 정보 확인</p>
                <a href="#">지급보증안내</a>

                <p><img src="./hm.png" alt="h&m" width="80px" height="60px" /></p>
            </div>
        </div>
    )
}

export default Footer