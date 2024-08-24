import { createSlice } from "@reduxjs/toolkit";


let initialState = {
    productList: [],
    selectedItem: null,
}

/* function productReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case "GET_PRODUCT_SUCCESS":
            return { ...state, productList: payload.data };
        case "GET_SINGLE_PRODUCT_SUCCESS":
            return { ...state, selectedItem: payload.data };
        default:
            return { ...state };
    }
}

export default productReducer; */

//redux-toolkit 사용

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getAllProducts(state, action) {
            state.productList = action.payload.data
        },
        getSingleProduct(state, action) {
            state.selectedItem = action.payload.data
        }
    }
})

export const productActions = productSlice.actions
export default productSlice.reducer //!마지막은 reducer!