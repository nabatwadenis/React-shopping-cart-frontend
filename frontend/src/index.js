import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
//import authReducer from "./slices/authSlice";

//import { Provider } from "react-redux"
//import { configureStore } from "@reduxjs/toolkit";

/*const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
