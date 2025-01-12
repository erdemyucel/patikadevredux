import {configureStore} from '@reduxjs/toolkit'
import ProductsSlice from './product/ProductsSlice'

export const store = configureStore({
    reducer: {
        products : ProductsSlice
    }
})