import React from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.f_top}>
          <div className={styles.ft_left}>
            <div className={styles.ft_logo}>
              <img src="/images/common/logo-b.svg" alt="" />
            </div>
          </div>
          <div className={styles.ft_right}>
            <div className={styles.item}>
              <div className={styles.tit}>COMPANY</div>
              <ul>
                <li>
                  <Link>회사소개</Link>
                </li>
                <li>
                  <Link>이용안내</Link>
                </li>
              </ul>
            </div>
            <div className={styles.item}>
              <div className={styles.tit}>SERVICE</div>
              <ul>
                <li>
                  <Link>이용약관</Link>
                </li>
                <li>
                  <Link>개인정보처리방침</Link>
                </li>
              </ul>
            </div>
            <div className={styles.item}>
              <div className={styles.tit}>고객센터</div>
              <ul>
                <li>
                  <Link>공지사항</Link>
                </li>
                <li>
                  <Link>자주 묻는 질문</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.f_bottom}>
          <div className={styles.fb_info}>
            <p>서울특별시청 04524 서울특별시 중구 세종대로 110, 3층 트레블투개더</p>
            <p>
              <span>대표 : 김한강</span>
              <span>대표전화: 02-120</span>
              <span>사업자 등록번호 : 111-81-4456</span>
              <span>대표전화 : 02-1234-5678</span>
              <span>팩스 : 02-1234-5679</span>
            </p>
            <p className="copy">© 2023 Together Travel, Inc. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer