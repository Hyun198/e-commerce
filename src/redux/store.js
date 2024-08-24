import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import authenticateReducer from "./reducers/authenticateReducer";
/* let store = createStore(rootReducer, applyMiddleware(thunk));
 */
//모든게 configureStore 안에 있음.
//combinereducer
//thunk
//appliymiddleware
//comeposewithdevtools

let store = configureStore({
    reducer: {
        auth: authenticateReducer,
        product: productReducer,
    }

})

export default store;