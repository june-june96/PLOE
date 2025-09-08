import React from 'react';

export default function Location() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <img src="/images/map.jpg" alt="플로에 위치" style={{width: 500}}/>
      <div style={{width: 500, height:500, border:'1px solid #ccc', borderRadius : 30}}>
        <h3 style={{textAlign : 'center', marginTop : 30}}>회사 위치</h3>
        <div style={{padding : 50}}>
            <p><i class="fa-solid fa-house"></i> 부산 부산진구 중앙대로 688 한준빌딩 2층</p>
            <p>부산 부산진구 부전동 194-7</p>
            <p>47296</p>
            <br />
            <p><i class="fa-solid fa-route"></i> 지하철 서면역 2번 출구에서 범내골 방향 80m 오셔서</p>
            <p>쥬디스태화 인근 큰 대로변에 위치하고 있습니다.</p>
            <p>파란간판을 찾아주세요</p>
            <p>(서브웨이 바로 옆, 한준 빌딩 2~6층)</p>
        </div>
      </div>
    </div>
  );
}
