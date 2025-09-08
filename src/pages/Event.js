import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import reviews from './review';

export default function Event() {
  return (
    <Container style={{ padding: '50px 0' }}>     
      <img
        src={process.env.PUBLIC_URL + '/images/event2-1.jpg'}
        alt="이벤트 이미지"
        style={{ width: '100%', marginBottom: '50px' }}
      />

      <h3 style={{ fontWeight: 'bold', marginBottom: '30px', textAlign: 'center' }}>8월 베스트 리뷰</h3>

      <Row>
        {reviews.map((review, index) => (
          <Col md={4} key={index} className="mb-4">
            <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
              <img
                src={review.img || process.env.PUBLIC_URL + '/images/review01.jpg'}
                alt={`리뷰 ${index + 1}`}
                style={{ width: '100%', maxHeight: '250px', objectFit: 'cover', borderRadius: '8px' }}
              />
              <p style={{ fontWeight: 'bold', marginTop: '10px' }}>{review.textTop}</p>
              <p><span style={{ color: '#666' }}>평점 </span>{review.textTop2}</p>
              <hr />
              <p style={{ color: '#c69c6d' }}>{review.textBottom}</p>
              <p>{review.textBottom2}</p>
            </div>
          </Col>
        ))}
      </Row>

      <img
        src={process.env.PUBLIC_URL + '/images/event2-2.jpg'}
        alt="이벤트 이미지"
        style={{ width: '100%', marginBottom: '50px' }}
      />
    </Container>
  );
}