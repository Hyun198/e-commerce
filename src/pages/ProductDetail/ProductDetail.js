import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
const ProductDetail = () => {
    let { id } = useParams();
    const [product, setProduct] = useState([]);

    const getProductDetail = async () => {
        let url = `http://localhost:5000/products/${id}`
        let response = await axios.get(url);
        setProduct(response.data);
    }

    useEffect(() => {
        getProductDetail()

    }, [])

    return (
        <div>
            <img src={product.img} width="250" height="340" />
            <div>Conscious choice</div>
            <div className="title">{product.title}</div>
            <div className="price">₩{Number(product.price).toLocaleString()}</div>
            <div>{product.new === true ? "신제품" : ""}</div>
        </div>
    )
}

export default ProductDetail