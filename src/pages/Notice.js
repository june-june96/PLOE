import React from 'react';

// pagenation
const page = {
  padding: '6px 12px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: 'transparent',
  cursor: 'pointer'
};

export default function Notice() {
  return (
    <div>
    <h2>공지사항</h2>
    <div style={{marginTop:50}}>
      <ul>
        <li style={{borderTop: '1px solid #ccc', borderBottom: '1px solid #ccc'}}>
          <p style={{fontWeight:'bold', cursor: 'pointer'}}>플로에 인터뷰</p>
          <p>2025-08-21</p>
        </li>
        <li style={{borderBottom: '1px solid #ccc'}}>
          <p style={{fontWeight:'bold', cursor: 'pointer'}}>플로에 멤버십 혜택</p>
          <p>2025-08-10</p>
        </li>
        <li style={{borderBottom: '1px solid #ccc'}}>
          <p style={{fontWeight:'bold', cursor: 'pointer'}}>이용약관 변경 사전 고지 안내</p>
          <p>2025-07-11</p>
        </li>
      </ul> 
    </div>
    <div className='pagenation' style={{display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '30px'}}>
      <button style={page}>{'<<'}</button>
      <button style={page}>{'<'}</button>
      <button style={page}>1</button>
      <button style={page}>{'>'}</button>
      <button style={page}>{'>>'}</button>
    </div>

    </div>
  );
}
