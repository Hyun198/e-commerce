import React from 'react'
import './ProductCard.style.css'
import { useNavigate } from 'react-router-dom'
const ProductCard = (data) => {
    let product = data.product
    const navigate = useNavigate();

    const showDetail = () => {
        navigate(`/product/${product.id}`)
    }
    return (
        <div className="productcard" onClick={showDetail}>
            <img src={product.img} width="250" height="340" />
            <div>Conscious choice</div>
            <div className="title">{product.title}</div>
            <div className="price">₩{Number(product.price).toLocaleString()}</div>
            <div>{product.new === true ? "신제품" : ""}</div>
        </div>
    )
}

export default ProductCard