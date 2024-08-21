import React from 'react'
import { useParams } from 'react-router-dom'
import "./ProductDetail.style.css"
import { useProductDetailQuery } from '../../hooks/useProductDetailQuery';
const ProductDetail = () => {
    let { id } = useParams();

    const { data: detail, isLoading, isError } = useProductDetailQuery(id);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>please wait...</div>;


    const ProductSizeList = [
        "XS", "S", "M", "L", "XL", "XXL"
    ]

    const ProductColors = [
        "White", "Black", "Sky"
    ]



    return (
        <div>
            <div className="product-detail">
                <div className="detail-left">
                    <img src={detail.img} alt="detail.title" />
                </div>
                <div className="detail-right">
                    <div className="title">{detail.title}</div>
                    <div className="options">
                        {ProductColors.map((color) => (
                            <button>{color}</button>
                        ))}

                    </div>

                    <div className="price">₩{Number(detail.price).toLocaleString()}</div>
                    <div className="size">
                        {ProductSizeList.map((size) => (
                            <button>{size}</button>
                        ))}
                    </div>

                    <div>{detail.new === true ? "New" : ""}</div>

                    <div className="detail-cart">
                        <button>장바구니</button>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default ProductDetail