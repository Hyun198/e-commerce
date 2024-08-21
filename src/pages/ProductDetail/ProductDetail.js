import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import "./ProductDetail.style.css"
const ProductDetail = () => {
    let { id } = useParams();
    const [product, setProduct] = useState([]);

    const ProductSizeList = [
        "XS", "S", "M", "L", "XL", "XXL"
    ]

    const ProductColors = [
        "White", "Black", "Sky"
    ]

    const getProductDetail = async () => {
        let url = `http://localhost:5000/products/${id}`
        let response = await axios.get(url);
        console.log(response);
        setProduct(response.data);
    }

    useEffect(() => {
        getProductDetail()

    }, [])

    return (
        <div>
            <div className="product-detail">
                <div className="detail-left">
                    <img src={product.img} />
                </div>
                <div className="detail-right">
                    <div className="title">{product.title}</div>
                    <div className="options">
                        {ProductColors.map((color) => (
                            <button>{color}</button>
                        ))}

                    </div>

                    <div className="price">₩{Number(product.price).toLocaleString()}</div>
                    <div className="size">
                        {ProductSizeList.map((size) => (
                            <button>{size}</button>
                        ))}
                    </div>

                    <div>{product.new === true ? "New" : ""}</div>

                    <div className="detail-cart">
                        <button>장바구니</button>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default ProductDetail