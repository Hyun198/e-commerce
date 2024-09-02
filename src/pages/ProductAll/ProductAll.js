import React, { useEffect } from 'react'
import './ProductAll.style.css'
import video from '../../assets/2024.mp4';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/reducers/productSlice';


const ProductAll = () => {

    const productList = useSelector(state => state.product.productList);
    const [query, setQuery] = useSearchParams();
    const dispatch = useDispatch()

    const getProducts = async () => {
        let searchQuery = query.get("q") || query.get("category") || ""; // 카테고리나 검색어가 있을 때 사용
        // 검색어가 있을 경우에만 fetchProducts를 디스패치
        dispatch(fetchProducts(searchQuery));
    }

    useEffect(() => {
        getProducts();

    }, [query]); // product 변경될 때마다 productList를 업데이트


    const currentQuery = query.get("category");


    return (
        <div>
            <div className="video-container">
                <video src={video} autoPlay loop muted />
                <div className="container">
                    <h2 className="wlc">Welcome</h2>
                    <h1 className="title">H & M</h1>
                </div>
            </div>


            <h1>{currentQuery ? currentQuery + " 의상" : "모두 보기"}</h1>
            <div className="products">
                {productList?.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>

    )
}

export default ProductAll