import React from 'react'

const NavBar = () => {
  return (
	<header className="header">
    <div className="inner">
        <div className="header-left">
            <a href="javascript:alert('준비중입니다.')" className="logo"><div className="logo-img">트래블투게더</div></a>
        </div>
        <div className="header-mid">
            <div className="menu">
                <ul className="lnb">
                    <li className="active">
                        <a href="" className="has-ch">연구원 소개</a>
                        <ul className="lnb_dep2">
                            <li><a href="">인사말</a></li>
                            <li><a href="">설립 목적(연혁)</a></li>
                            <li><a href="">조직도</a></li>
                            <li><a href="">찾아오시는길</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="" className="has-ch">협력체계</a>
                        <ul className="lnb_dep2">
                            <li><a href="">MOU 체결 현황</a></li>
                            <li><a href="">COLiVE</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="" className="has-ch">연구원 소식</a>
                        <ul className="lnb_dep2">
                            <li><a href="">공지사항</a></li>
                            <li><a href="">자료실</a></li>
                            <li><a href="">산학알리미</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div className="header-right">
            
            <div className="btn-group">
                <div className="side_btn">
                    <button type="button" title="메뉴 열기/닫기" className="switch"><span>메뉴 열기/닫기</span></button>
                </div>
            </div>
        </div>
    </div>
	</header> 
  )
}

export default NavBar