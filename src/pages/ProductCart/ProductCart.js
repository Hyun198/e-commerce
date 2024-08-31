import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { removeFromCart, updateCartItemQuantity } from '../../redux/reducers/productSlice';
import './ProductCart.style.css';

const ProductCart = () => {
    const cartItems = useSelector((state) => state.product.cartItems);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(
        cartItems.reduce((acc, item) => {
            acc[item.id] = item.quantity;
            return acc;
        }, {})
    )

    const handleRemove = (id) => {
        dispatch(removeFromCart(id))
    };

    const handleInputChange = (id, quantity) => {
        // 로컬 상태를 먼저 업데이트
        setQuantity({ ...quantity, [id]: quantity });
    };

    const handleUpdateQuantity = (id) => {
        dispatch(updateCartItemQuantity({ id, quantity: quantity[id] }));
    };


    return (
        <div className="productCart">
            <h2>장바구니</h2>
            {cartItems.length === 0 ? (
                <p>비어 있습니다.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id} >
                            <img src={item.img} alt={item.title} width="100px" height="100px" />
                            <h3>{item.title}</h3>
                            <p>가격: {item.price}</p>
                            수량:
                            <input
                                type="number"
                                value={quantity[item.id]}
                                onChange={(e) =>
                                    handleInputChange(item.id, Number(e.target.value))
                                } />
                            <button onClick={() => handleRemove(item.id)}>삭제</button>
                            <button onClick={() => handleUpdateQuantity(item.id)}>수정</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ProductCart