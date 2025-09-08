import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from './store';
import React, { useState, useRef } from 'react';
import reviews from './review';
import reviewText from './reviewText';
import qnaList from './qna';

export default function Details({ bests }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = bests[Number(id)];

  const [quantity, setQuantity] = useState(1);
  const price = Number(product.price.replace(/[^0-9]/g, ''));

  const detailRef = useRef(null);
  const reviewRef = useRef(null);
  const qnaRef = useRef(null);
  const guideRef = useRef(null);

  const [activeTab, setActiveTab] = useState('상세정보');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    let ref;
    if(tab === '상세정보') ref = detailRef;
    else if(tab === '구매안내') ref = guideRef;
    else if(tab === '상품후기') ref = reviewRef;
    else if(tab === 'Q&A') ref = qnaRef;

    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  if (!product) return <p>상품을 찾을 수 없습니다.</p>;

  const tabs = ['상세정보', '구매안내', '상품후기', 'Q&A'];

  return (
    <div className="detailsPage">
      {/* 상품 이미지 & 정보 */}
      <div className="detailsHeader">
        <img src={product.image} alt={product.title} className="detailsImage"/>
        <div className="detailsInfo">
          <div className="detailsTitle">
            <p className="productName">{product.title}</p>
            <div className="productDescWrap">
              <p className="productDesc">{product.desc}</p>
              <p className="productDiscount">{product.discount}%</p>
            </div>
            <p className="productPrice">{product.price}</p>
          </div>

          {/* 수량 조절 */}
          <div className="quantityBox">
            <button className="quantityBtn minus" onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
            <span className="quantityNum">{quantity}</span>
            <button className="quantityBtn plus" onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>

          {/* 총 금액 */}
          <p className="totalPrice">
            총 금액 : <span className="totalAmount">{(price * quantity).toLocaleString()}원</span>
          </p>

          {/* 장바구니 버튼 */}
          <button className="addCartBtn" 
            onClick={() => dispatch(addItem({ id: product.id, title: product.title, count: quantity, image:product.image }))}>
            장바구니
          </button>
        </div>
      </div>

      {/* 탭 메뉴 */}
      <div className="tabMenu">
        {tabs.map(tab => (
          <div 
            key={tab} 
            onClick={() => handleTabClick(tab)}
            className={`tabItem ${activeTab === tab ? 'active' : ''}`}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* 상세정보 */}
      <div ref={detailRef} className="tabContent detailInfo">
        <h2>상세정보</h2>
        <img src="/images/best01_info01.jpg" alt=""/>
        <img src="/images/best01_info04.jpg" alt=""/>
        <img src="/images/best01_info09.jpg" alt=""/>
        <img src="/images/best01_info13.jpg" alt=""/>
      </div>

      {/* 구매안내 */}
      <div ref={guideRef} className="tabContent guideInfo">
        <h2>구매안내</h2>
        <img src="/images/buy_info.jpg" alt=""/>
      </div>

      {/* 상품후기 */}
      <div ref={reviewRef} className="tabContent reviewsSection">
        <h2>상품후기</h2>

        <div className="reviewSummary">
          <div className="reviewScoreBox">
            <p className="reviewScoreTitle">상품 만족도</p>
            <p className="reviewScoreNumber"><span>★</span><span>5.0</span>/5</p>
            <p>{reviews.length}개의 리뷰가 있습니다.</p>
            <button className="writeReviewBtn">리뷰 작성하기</button>
          </div>

          <div className="reviewBarBox">
            {[5,4,3,2,1].map(score => {
              let percent;
              if(score === 5) percent = 70;
              else if(score === 4) percent = 20;
              else if(score === 3) percent = 10;
              else percent = 0;

              return (
                <div key={score} className="reviewBarRow">
                  <span className="reviewBarScore">{score}점</span>
                  <div className="reviewBarWrap">
                    <div className="reviewBarFill" style={{width:`${percent}%`}}></div>
                  </div>
                  <span className="reviewBarPercent">{percent}%</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* 포토리뷰 */}
        <div className="photoReviewContainer">
          {reviews.map((review, idx) => (
            <div key={idx} className="photoReviewItem">
              <img src={review.img} alt="review" style={{width:'100%', height:290, objectFit:'cover', borderRadius:10, marginBottom:15}} />
              <p style={{fontWeight:'bold'}}>{review.textTop} <span style={{color:'#c69c6d'}}>{review.textTop2}</span></p>
              <p>{review.textBottom}</p>
              <p style={{color:'#888'}}>{review.textBottom2}</p>
            </div>
          ))}
        </div>


        {/* 글 리뷰 */}
        <div className="textReviews">
          <h2>글 리뷰</h2>
          <div className="textReviewsGrid">
            {reviewText.map((review) => (
              <div key={review.id} className="textReviewCard">
                <div className="reviewLeft">
                  <div className="reviewStars">{'★'.repeat(review.star) + '☆'.repeat(5 - review.star)}</div>
                  <p className="reviewName">{review.name}</p>
                  <p className="reviewDate">{review.date}</p>
                </div>
                <div className="reviewRight">
                  <p>{review.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Q&A */}
      <div ref={qnaRef} className="tabContent qnaSection">
        <h2>Q&A</h2>
        <div className="qnaTable">
          <div className="qnaHeader">
            <div className="qnaName">이름</div>
            <div className="qnaTitle">제목</div>
            <div className="qnaDate">날짜</div>
          </div>
          {qnaList.map((qna) => (
            <div key={qna.id} className="qnaRow">
              <div className="qnaName">{qna.name}</div>
              <div className="qnaTitle">{qna.title}</div>
              <div className="qnaDate">{qna.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
