const bests = [
{
    id: 'best-01',
    image: process.env.PUBLIC_URL+'/images/best_01.jpg',
    title: '플로에 한끼 식단 SET (베이글 + 그릭요거트)',
    desc: 37000,
    price: 28490,
    discount: 23
},
{
    id: 'best-02',
    image: process.env.PUBLIC_URL+'/images/best_02.jpg',
    title: '[골라담기] 플로에 해피 통밀 원곡 베이글 3종',
    desc: 28000,
    price: 22960,
    discount: 18
},
{
    id: 'best-03',
    image: process.env.PUBLIC_URL+'/images/best_03.png',
    title: '[골라담기] 플로에 해피 그릭요거트 4종',
    desc: 25200,
    price: 21420,
    discount: 15
},
{
    id: 'best-04',
    image: process.env.PUBLIC_URL+'/images/best04.png',
    title: '플로에 해피 딸기잼 & 초코잼',
    desc: 23000,
    price: 19550,
    discount: 15
},
{
    id: 'best-05',
    image: process.env.PUBLIC_URL+'/images/best05.png',
    title: '플로에 적립금 (5만원 & 10만원)',
    desc: 100000,
    price: 90000,
    discount: 10
},
];
export function parsePrice(priceStr) {
  return parseInt(priceStr.replace(/,/g,'').replace('원','')) || 0;
}
export default bests;