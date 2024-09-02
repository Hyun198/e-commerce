import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


let initialState = {
    productList: [],
    selectedItem: null,
    isLoading: false,
    error: null,
    cartItems: [], //장바구니 항목 추가
}

//redux-toolkit 사용

export const fetchProducts = createAsyncThunk('product/fetchAll', async (searchQuery, thunkApi) => {
    console.log("productSLice:  ", searchQuery);
    try {
        let url = `https://my-json-server.typicode.com/Hyun198/e-commerce/products?q=${searchQuery}`
        let response = await fetch(url);
        console.log(response);
        return await response.json();
    }
    catch (error) {
        thunkApi.rejectWithValue(error.message)
    }

})

export const fetchProductDetail = createAsyncThunk('product/fetchDetail', async (id, thunkApi) => {
    try {
        let url = `https://my-json-server.typicode.com/Hyun198/e-commerce/products/${id}`;
        let response = await fetch(url);
        return await response.json();
    } catch (error) {
        thunkApi.rejectWithValue(error.message)
    }
})

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getAllProducts(state, action) {
            state.productList = action.payload.data
        },
        getSingleProduct(state, action) {
            state.selectedItem = action.payload.data
        },
        addToCart(state, action) {
            const item = action.payload;
            const existingItem = state.cartItems.find(
                (cartItem) => cartItem.id === item.id
            )
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...item, quantity: 1 });
            }
        },
        removeFromCart(state, action) {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        },
        updateCartItemQuantity(state, action) {
            const { id, quantity } = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === id)

            if (existingItem) {
                existingItem.quantity = quantity;
            }
        },
    },
    //reactquery에서 iserror, isloading 이랑 비슷
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true
        })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.productList = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })

            .addCase(fetchProductDetail.pending, (state) => {
                state.isLoading = true
            }).addCase(fetchProductDetail.fulfilled, (state, action) => {
                state.isLoading = false
                state.selectedItem = action.payload
            }).addCase(fetchProductDetail.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const {
    getAllProducts,
    getSingleProduct,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
} = productSlice.actions;
export default productSlice.reducer //!마지막은 reducer!