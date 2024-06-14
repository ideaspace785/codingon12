import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import { productInfos } from '../components/ProductList';

export default function ProductDetailPage({products}) {
    console.log("useParams: ", useParams()) //{productId:7}
    const {productId}= useParams();
    const targetProduct=products[productId - 1]  
    console.log(targetProduct)
    const {id, name, email, body}=targetProduct;
    //index 사용하고 있기 때문에 하나씩 빼주기 , js를 사용하고 있어서 알아서 연산() 문자열->숫자 로 자동으로 해주고 있다

    const navigate=useNavigate();

  return (
    <div>
        <h1>ProductDetailPage</h1>
        <button onClick={()=> navigate(-1)}>뒤로 가기</button>
        <button onClick={()=> navigate('/')}>Home으로 이동하기</button>
        <ul>
            <li>상품 번호: {id}</li>
            <li>상품명: {name}</li>
            <li>판매자:{email}</li>
            <li>상세 설명: {body}</li>
        </ul>
    </div>
  )
}
