import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { removeFromCart, updateCartItemQuantity } from '../../redux/reducers/productSlice';
import './ProductCart.style.css';

const ProductCart = () => {
    const cartItems = useSelector((state) => state.product.cartItems);

    const [price, setPrice] = useState(0);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(
        cartItems.reduce((acc, item) => {
            acc[item.id] = item.quantity;
            return acc;
        }, {})
    )

    useEffect(() => {
        const totalPrice = cartItems.reduce((sum, item) => {
            const itemQuantity = quantity[item.id] || 0;
            return sum + (item.price * itemQuantity);
        }, 0);
        setPrice(totalPrice);
    }, [cartItems, quantity]);

    const handleRemove = (id) => {
        dispatch(removeFromCart(id))
    };

    const handleInputChange = (id, value) => {
        setQuantity((prevQuantity) => ({
            ...prevQuantity,
            [id]: value,
        }));
    };

    const handleUpdateQuantity = (id) => {
        dispatch(updateCartItemQuantity({ id, quantity: quantity[id] }));
    };

    const GotoPayment = () => {
        navigate('/payment');
    }

    return (

        <div>
            <h2>장바구니</h2>

            {cartItems.length === 0 ? (
                <div className="Empty_cart">
                    <p>장바구니가 비어 있습니다.</p>
                </div>

            ) : (
                <>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>상품 사진</th>
                                <th>상품명</th>
                                <th>가격</th>
                                <th>수량</th>
                                <th>삭제</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <img src={item.img} alt={item.title} width="50" height="50" />
                                    </td>
                                    <td>{item.title}</td>
                                    <td>{item.price.toLocaleString()}원</td>
                                    <td>
                                        <input
                                            type="number"
                                            min="1"
                                            value={quantity[item.id]} // 로컬 상태에서 수량 가져오기
                                            onChange={(e) =>
                                                handleInputChange(item.id, Number(e.target.value))
                                            }
                                        />
                                        <button onClick={() => handleUpdateQuantity(item.id)}>수정</button>
                                    </td>
                                    <td>

                                        <button onClick={() => handleRemove(item.id)}>삭제</button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>


                    <div className="item_price">
                        <div>상품 합계: {price.toLocaleString()} ₩ </div>
                        <div>배송비: 3,000 ₩</div>
                        <p></p>
                        <div>결제 금액: {(price + 3000).toLocaleString()} ₩</div>
                    </div>

                    <div className="pay">
                        <button onClick={GotoPayment}>결제하기</button>
                    </div>
                </>
            )}


        </div>
    )
}

export default ProductCart