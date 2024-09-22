import React, { useEffect } from 'react'
import './ProductAll.style.css'
import video from '../../assets/2024.mp4';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/reducers/productSlice';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const ProductAll = () => {

    const images = [
        require('../../assets/main2-1.avif'),
        require('../../assets/main2-2.avif'),
        require('../../assets/main2-3.avif'),
        require('../../assets/main2-4.avif'),
        require('../../assets/main2-5.avif'),
        require('../../assets/main2-6.avif'),
        require('../../assets/main2-7.avif'),
        require('../../assets/main2-8.avif'),
    ]

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

            {!currentQuery && (
                <div className="video-container">
                    <video src={video} autoPlay loop muted />
                    <div className="container">
                        <h2 className="wlc">Welcome</h2>
                        <h1 className="title">H & M</h1>
                    </div>
                </div>
            )}

            <Carousel
                className='carousel'
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={1000}
                infinite={true}
            >
                {images.map((image, index) => (
                    <div className="slider">
                        <img src={image} alt={index} />
                    </div>

                ))}

            </Carousel>;
            <h1 className="h1-tag">{currentQuery ? `${currentQuery} 의상` : "모두 보기"}</h1>
            <div className="products">
                {productList?.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>

    )
}

export default ProductAll