import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './feature/cart/cartSlice'
import authApi from './feature/auth/authApi'
import authReducer from './feature/auth/authSlice'
import productsApi from './feature/products/productsApi'
import reviewsApi from './feature/reviews/reviewsApi'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, productsApi.middleware, reviewsApi.middleware),
})