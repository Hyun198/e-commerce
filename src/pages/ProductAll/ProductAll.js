import React, { useEffect } from 'react'
import './ProductAll.style.css'
import ProductCard from '../../components/ProductCard/ProductCard';
import { useSearchParams } from 'react-router-dom';
import { productAction } from '../../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux';

const ProductAll = () => {

    const productList = useSelector(state => state.product.productList);
    const [query, setQuery] = useSearchParams();
    const dispatch = useDispatch()

    const getProducts = () => {
        let searchQuery = query.get("q") || "";
        dispatch(productAction.getProducts(searchQuery))
    }

    useEffect(() => {
        getProducts();

    }, [query]); // product 변경될 때마다 productList를 업데이트


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