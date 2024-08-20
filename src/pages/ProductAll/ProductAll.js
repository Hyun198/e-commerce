import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './ProductAll.style.css'
import ProductCard from '../../components/ProductCard/ProductCard';
const ProductAll = () => {

    const [productList, setProductList] = useState([]);

    const getProducts = async () => {
        let url = 'http://localhost:5000/products'
        let response = await axios.get(url);
        setProductList(response.data);
    }

    useEffect(() => {
        getProducts()
    }, [])
    return (
        <div>
            <h1>모두 보기</h1>
            <div className="products">
                {productList?.map((product) => (
                    <ProductCard product={product} />
                ))}
            </div>
        </div>

    )
}

export default ProductAll