import React, { useEffect, useState } from 'react'
import './ProductAll.style.css'
import ProductCard from '../../components/ProductCard/ProductCard';
import { useSearchParams } from 'react-router-dom';
import { useProductQuery } from '../../hooks/useProductQuery';

const ProductAll = () => {

    const [productList, setProductList] = useState([]);
    const [query] = useSearchParams();

    const keyword = query.get("q") || "";
    const { data: products, isLoading, error, isError } = useProductQuery(keyword);

    useEffect(() => {
        if (products) {
            setProductList(products);
        }
    }, [products]); // product 변경될 때마다 productList를 업데이트

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }
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