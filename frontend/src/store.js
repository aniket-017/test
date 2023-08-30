import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { venueReducer } from "./reducers/venueReducer";
import { userReducer } from "./reducers/userReducer";
// import { newProductReducer, newReviewReducer, productDetailsReducer, productReducer } from "./reducers/productReducer";
// import { forgotPasswordReducer, profileReducer, userReducer } from "./reducers/userReducer";


const reducer = combineReducers({
    venue : venueReducer,
    // products: productReducer,
    // productDetails: productDetailsReducer,
    user: userReducer,
    // profile: profileReducer,
    // forgotPassword:forgotPasswordReducer,
    // newReview: newReviewReducer,
    // newProduct: newProductReducer,
});

let initialState = {};

const middleware = [thunk];

const store = configureStore(
    {reducer},
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;