import React from 'react'
import './Payment.style.css';
import { useDispatch, useSelector } from 'react-redux';

const Payment = () => {

    const items = useSelector((state) => state.product.cartItems);
    const totalPrice = useSelector((state) => state.product.totalPrice);


    return (
        <div className="payment">
            <h1>결제 페이지</h1>
            <div className="all-side">
                <div className="left-side">
                    {items?.map((item) => (
                        <div className="product" key={item.id}>
                            <img src={item.img} alt={item.title} className="product-image" />
                            <div className="product-desc">
                                <p className="product-name">{item.title}</p>
                                <p className="product-price">₩{item.price.toLocaleString()}</p>
                                <div className="cart-detail">
                                    <p>상품번호: {item.id}</p>
                                    <p>컬러: black</p>
                                    <p>사이즈: S</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="right-side">
                    <div className="final-desc">
                        <p>주문 가격</p>
                        <p>₩ {(totalPrice).toLocaleString()}</p>
                    </div>
                    <div className="final-desc">
                        <p>배송</p>
                        <p>₩ 3,000</p>
                    </div>
                    <div className="final-desc">
                        <p>합계: </p>
                        <p>₩ {(totalPrice + 3000).toLocaleString()}</p>
                    </div>
                    <button className="pay">결제 계속하기</button>
                </div>
            </div>


        </div>
    )
}

export default Payment