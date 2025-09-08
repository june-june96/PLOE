import './App.css';
import './index.css';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// React-Icons
import { FaSearch } from 'react-icons/fa';

import { Container, Nav, Navbar, Row, Col, Form } from 'react-bootstrap';

import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import data from './pages/data';
import { useDispatch } from 'react-redux';
import { addItem } from './pages/store';
import { useSelector } from 'react-redux';

import Products from './pages/Products';
import Information from './pages/Information';
import Location from './pages/Location';
import Details from './pages/Details';
import Event from './pages/Event';
import Notice from './pages/Notice';
import Cart from './pages/Cart';
import reviews from './pages/review';

function TopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkScroll = () => setShow(window.scrollY > 200);
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  if (!show) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="topButton">
      ↑
    </button>
  );
}

// topbanner
function TopBanner() {
  return (
    <div className="topBanner">
      카카오톡 친구 추가하고 1,000원 할인권 받기
    </div>
  );
}
function HeaderTop({ navigate }) {
    const cart = useSelector(state => state.cart);
    const cartCount = cart.reduce((acc, item) => acc + item.count, 0);
  return (
    <div className="headerTop">
      <img
        src={process.env.PUBLIC_URL + '/images/logo2.png'}
        alt="로고"
        className="headerLogo"
        onClick={() => navigate('/')}
      />

      <div className="searchBox">
        <input 
          type="search" 
          placeholder="검색어를 입력하세요" 
          className="searchInput"
        />
        <FaSearch className="searchIcon"/>
      </div>

      <div className="navMenu">
        <span className="navMenuItem" onClick={() => navigate('')}>로그인</span>
        <span className="navMenuItem" onClick={() => navigate('')}>마이페이지</span>
        <span className="navMenuItem cartWrapper" onClick={() => navigate('/cart')}>
          장바구니
          {cartCount > 0 && (
            <span className="cartBadge">
              {cartCount}
            </span>
          )}
        </span>
      </div>
    </div>
  );
}

// headermenu
function HeaderMenu({ navigate }) {
  return (
    <div className="headerMenu">
      <ul className="menuList">
        <li className="menuItem" onClick={() => navigate('/products')}>제품</li>
        <li className="menuItem" onClick={() => navigate('/products/event')}>이벤트</li>
        <li className="menuItem" onClick={() => navigate('/products/info')}>회사 소개</li>
        <li className="menuItem" onClick={() => navigate('/products/loca')}>회사 위치</li>
        <li className="menuItem" onClick={() => navigate('/notice')}>공지사항</li>
      </ul>
    </div>
  );
}

function App() {
  const navigate = useNavigate();
  const [bests] = useState(data);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <TopBanner />
      <HeaderTop navigate={navigate} />
      <HeaderMenu navigate={navigate} />
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={
              <Container>
                {/* Main Visual */}
                <img 
                  className="mainVisual"
                  src={process.env.PUBLIC_URL + '/images/visual_main01.jpg'} 
                  alt="비주얼 메인" 
                />

                {/* Best 상품 */}
                <p style={{ fontWeight: 'bold', fontSize:32 }}>Best 상품</p>
                <Row>
                  {bests.slice(0, 3).map((best, index) => {
                    return (
                      <Col md={4} key={index}>
                        <Link className="thumbnail" to={`details/${index}`}>
                          <img src={best.image} alt={best.title} style={{ width: 350 }} />
                          <p>{best.title}</p>
                          <p style={{textDecoration: 'line-through', color: '#ccc', margin: 0}}>
                            {best.desc.toLocaleString()}원
                          </p>
                          <p style={{ fontWeight: 'bold' }}>
                            <span style={{ marginRight: '8px', color:'#c69c6d' }}>{best.discount}%</span>
                            {best.price.toLocaleString()}원
                          </p>
                        </Link>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                          {/* 찜하기 버튼 */}
                          <button className="productBtn wishBtn">
                            <i className="fa-solid fa-heart"></i>
                          </button>

                          {/* 장바구니 버튼 */}
                          <button
                            className="productBtn cartBtn"
                            onClick={() => {
                              dispatch(addItem({ id: best.id, title: best.title, count: 1, image: best.image }));
                              alert(`${best.title}을(를) 장바구니에 담았습니다.`);
                            }}
                          >
                            <i className="fa-solid fa-basket-shopping"></i>
                          </button>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
                {/* 서브배너 01 */}
                <img 
                  className="subBanner" 
                  src={process.env.PUBLIC_URL + '/images/subbanner01.png'} 
                  alt="서브배너" 
                />
                {/* event */}
                <section className="eventSection">
                  <p style={{width: 350, margin: '0 auto'}}>
                    하루의 건강한 시작,<br/>따뜻한 베이글 한 입.
                    </p>
                  <img src={process.env.PUBLIC_URL + '/images/event.png'} alt="이벤트 이미지" />
                  <p style={{width: 710, margin: '0 auto', paddingTop: 20}}>
                    첫 만남을 기념하여 990원에 드려요.<br/>
                    당신의 소중한 아침을 플로에가 함께할게요.
                  </p>
                </section>

                {/* introduce */}
                <section style={{margin: '70px auto', display: 'flex', alignItems: 'center'}}>
                  <img style={{width: 530, float: 'right'}} src = {process.env.PUBLIC_URL + '/images/introduce.jpg'} alt="이벤트 이미지" />
                  <p style={{width: 530, height: 530, marginLeft: 10, paddingTop: 100,fontSize:24}}>
                    맛있다고, 건강을 포기하고 싶지 않았습니다.<br/> <span style={{color: '#c69c6d', fontWeight: 'bold'}}>플로에</span>는 그런 마음에서 시작됐습니다.<br/><br/> 
                    저당·고단백, 균형 잡힌 영양은 기본.바쁜 하루에도 맛과 건강을 함께
                    챙길 수 있는 빵과 스프레드,
                    <br/>이젠 <span style={{color: '#c69c6d', fontWeight: 'bold'}}>맛있게</span> 먹으면서도 당당하세요.<br/><br/><span style={{color: '#c69c6d', fontWeight: 'bold'}}>플로에</span>가 함께하겠습니다.
                  </p>
                </section>
                {/* subbaenner 02 */}
                <img
                  className="subBanner02"
                  src={process.env.PUBLIC_URL + '/images/subbanner02.png'}
                  alt="서브배너 02"
                />
                {/* best review */}
                <Container className="reviewsSection">
                  <p className="reviewsTitle">BEST 후기</p>
                  <Row>
                    {reviews.map((review, index) => (
                      <Col key={index} md={4} className="reviewItem">
                        <div className="reviewItemContent">
                          <img
                            src={review.img || process.env.PUBLIC_URL + '/images/review01.jpg'}
                            alt={`리뷰 이미지 ${index + 1}`}
                          />
                          <p className="reviewTop">{review.textTop}</p>
                          <p className="reviewScore"><span>평점 </span>{review.textTop2}</p>
                          <hr />
                          <p className="reviewText">{review.textBottom}</p>
                          <p>{review.textBottom2}</p>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Container>

              </Container>
            }
        />

          <Route path="products" element={<Products bests={bests} />}>
            <Route path="event" element={<Event />} />
            <Route path="info" element={<Information />} />
            <Route path="loca" element={<Location />} />
          </Route>
          <Route path="details/:id" element={<Details bests={bests} />} />
          <Route path="notice" element={<Notice />} />
          <Route path="cart" element={<Cart />} />
        </Routes>

         <TopButton />
      </div>

      {/* footer */}
      <div style={{backgroundColor:'#c69c6d', height: 450, marginTop:120}}>
        <footer style={{width: 1070, height: 420, margin: '0 auto', display: 'flex'}}>
          <div style={{width: 400, marginRight: 200}}>
            <div style={{display:'flex', marginTop: 70, marginBottom: 130}}>
              <div>
                <img src="./images/character.png" alt="플로에 캐릭터 로고" style={{width: 130, height: 130}}/>
                <img src="./images/logo2.png" alt="플로에 텍스트 로고" style={{width: 130}}/>
             </div>
              <div style={{color:'white', margin: '0 50px', width: 350}}>
                <p>상호명 : 주식회사 플로에</p>
                <p>고객센터</p>
                <p>Tel. 0000 - 0000</p>
                <p>Fax. 02 - 000 - 0000</p>
              </div>
            </div>
            <p style={{color:'white'}}>Copyright PLOE Inc. All rights reserved.</p>
          </div>
          <div style={{width: 420, margin:'0 10px'}}>
            <p style={{marginTop:70, color:'white', marginBottom: 130}}>운영시간 <br/>
            평일 11:00 - 17:00 (점심 12:00 - 13:00) <br/>
            주말 및 공휴일 휴무 <br/><br/>
            주소 : 서울특별시 OOO구 XXX로 000 <br/>
            사업자 등록번호 : 000-00-00000 <br/>
            대표이사 : OOO
            </p>
            <div style={{display: 'flex', gap: 40}}>
              <img style={{cursor: 'pointer'}} src="./images/facebook.png" alt="페이스북 아이콘" />
              <a href="https://www.instagram.com/ploe_official/">
                  <img style={{cursor: 'pointer', width: 53}} src="./images/instagram.png" alt="인스타그램 아이콘" />
              </a>
              <img style={{cursor: 'pointer'}} src="./images/threads.png" alt="스레드 아이콘" />
              <img style={{cursor: 'pointer'}} src="./images/twitter.png" alt="트위터 아이콘" />
              <img style={{cursor: 'pointer'}} src="./images/youtube.png" alt="유튜브 아이콘" />
            </div>
          </div>
        </footer>
      </div>

    </div>
  );
}

export default App;