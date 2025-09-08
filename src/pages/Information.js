import React from 'react';

export default function Information() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <div style={{ position: 'relative', width: 500}}>
        <img
          style={{ width: '100%', borderRadius: 30, objectFit: 'cover', boxShadow: '5px 5px 15px rgba(0,0,0,0.3)'  }}
          src="/images/intro.jpg"
          alt="소개 상품"
        />
        <img
          style={{ width: 100, position: 'absolute', bottom: 50, right: 10 }}
          src="/images/character.png"
          alt="PLOE 캐릭터"
        />
        <img
          style={{ width: 100, position: 'absolute', bottom: 10, right: 10 }}
          src="/images/logo2.png"
          alt="PLOE 로고"
        />
      </div>
      <div>
          <p>
            플로에(PLOE)는 베이글과 잼 등 다양한 식품을 만드는 브랜드로,<br />
            <span style={{color: '#c69c6d', fontWeight: 'bold'}}>“건강하게 즐기는 빵 문화”</span>를 지향합니다. <br />
            <br />
            일반적으로 빵은 당과 나트륨, 정제 탄수화물이 많아<br /> 건강을 생각하는 사람들이 쉽게 다가가기 어려운 음식으로 여겨집니다. 
            <br />그러나 플로에는 이러한 장벽을 낮추기 위해 연구와 개발을 이어왔습니다.<br />
            <br />
            우리는 당과 나트륨을 최소화하면서도 풍미와 식감을 살려, <br />누구나 부담 없이 맛있게 즐길 수 있는 제품을 만듭니다. 
            <br />다이어트 중인 사람, 건강을 중시하는 소비자 모두가 안심하고 <br /> 선택할 수 있는 빵과 잼을 제공하는 것이 우리의 목표입니다.<br />
            <br />
            플로에는 앞으로도 <span style={{color: '#c69c6d', fontWeight: 'bold'}}>“맛있으면서도 건강한 선택”</span>을 위한 새로운 길을 열어가고 있습니다.
          </p>
      </div>
    </div>
  );
}
