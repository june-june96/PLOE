import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from './store';

export default function Products({ bests }) {
  const location = useLocation();
  const showProducts = location.pathname === '/products';
  const dispatch = useDispatch();

  return (
    <div className="productsWrapper">
  {showProducts && (
    <div className="productsGrid">
      {bests.map((item, index) => (
        <div className="productCard" key={index}>
          {/* 이미지 + 텍스트 영역 */}
          <Link to={`/details/${index}`} className="productLink">
            <div className="productImageWrapper">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="productText">
              <p>{item.title}</p>
              <p className="productDesc">{item.desc.toLocaleString()}원</p>
              <p className="productPrice">
                <span className="productDiscount">{item.discount}% </span>
                {item.price.toLocaleString()}원
              </p>
            </div>
          </Link>

          {/* 찜하기 + 장바구니 버튼 */}
          <div className="productButtons">
            <button className="productButton">
              <i className="fa-solid fa-heart"></i>
            </button>
            <button
              className="productButton"
              onClick={() => {
                dispatch(addItem({ id: item.id, title: item.title, count: 1, image: item.image }));
                alert(`${item.title}을(를) 장바구니에 담았습니다.`);
              }}
            >
              <i className="fa-solid fa-basket-shopping"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  )}
  <Outlet />
</div>
  );
}
