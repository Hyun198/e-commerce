import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './ProductAll.style.css'
import ProductCard from '../../components/ProductCard/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {

    let [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();
    let [error, setError] = useState("");

    const getProducts = async () => {
        try {
            let keyword = query.get("q") || "";
            let url = `http://localhost:5000/products?q=${keyword}`;
            let response = await fetch(url);
            let data = await response.json();
            if (data.length < 1) {
                if (keyword !== "") {
                    setError(`${keyword}와 일치하는 상품이 없습니다`);
                } else {
                    throw new Error("결과가 없습니다");
                }
            }
            setProductList(data);
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        getProducts();
    }, [query]);

    return (
        <div>
            <h1>모두 보기</h1>
            <div className="products">
                {productList?.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>

    )
}

export default ProductAll