import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./ProductDetail.style.css"
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../../redux/actions/productAction';


const ProductDetail = () => {
    let { id } = useParams();
    const product = useSelector((state) => state.product.selectedItem)
    console.log("product: ", product);
    const dispatch = useDispatch()
    const getProductDetail = async () => {
        dispatch(productAction.getProductDetail(id))
    }

    useEffect(() => {
        getProductDetail()
    }, [])

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
                    <img src={product?.img} alt="detail.title" />
                </div>
                <div className="detail-right">
                    <div className="title">{product?.title}</div>
                    <div className="options">
                        {ProductColors.map((color) => (
                            <button>{color}</button>
                        ))}

                    </div>

                    <div className="price">₩{Number(product?.price).toLocaleString()}</div>
                    <div className="size">
                        {ProductSizeList.map((size) => (
                            <button>{size}</button>
                        ))}
                    </div>

                    <div>{product?.new === true ? "New" : ""}</div>

                    <div className="detail-cart">
                        <button>장바구니</button>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default ProductDetail