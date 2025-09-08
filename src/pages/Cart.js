// src/pages/Cart.js
import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, addCount, subCount } from './store';
import bests from './data.js';

export default function Cart() {
  const cart = useSelector(state => state.cart);  
  const user = useSelector(state => state.user);  
  const dispatch = useDispatch();

  // 총 가격 계산
  const totalPrice = cart.reduce((total, item) => {
    const product = bests.find(p => p.id === item.id);
    if (!product) return total;
    return total + product.price * item.count;
  }, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h2>{user.name}님의 장바구니</h2>
      <Table striped bordered hover style={{ textAlign: 'center', verticalAlign: 'middle' }}>
        <thead>
          <tr>
            <th>상품 이미지</th>
            <th>상품명</th>
            <th>수량</th>
            <th>가격</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => {
            const product = bests.find(p => p.id === item.id);
            const itemPrice = product ? product.price * item.count : 0;
            return (
              <tr key={item.id}>
                <td style={{ backgroundColor: 'white' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: 100, height: 100, objectFit: 'cover', display: 'block', margin: '0 auto' }}
                  />
                </td>
                <td>{item.title}</td>
                <td>{item.count}</td>
                <td>{itemPrice.toLocaleString()}원</td>
                <td>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '5px' }}>
                     <button className="cartButton" onClick={() => dispatch(addCount(item.id))}>+</button>
                    <button className="cartButton" onClick={() => dispatch(subCount(item.id))}>-</button>
                    <button className="cartButton" onClick={() => dispatch(deleteItem(item.id))}>삭제</button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {/* 총 가격 */}
      <div style={{ textAlign: 'right', marginTop: '20px', fontSize: '30px', fontWeight: 'bold' }}>
        총 가격: {totalPrice.toLocaleString()}원
      </div>

      <div className='order'>
        주문하기
      </div>



    </div>
  );
}
