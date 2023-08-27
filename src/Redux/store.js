import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import armorReducer from './slices/armorSlice'
import searchReducer from './slices/searchSlice'
import nameReducer from './slices/armorNameSlice'


const store = configureStore({
    reducer: {
        auth: authReducer,
        armor: armorReducer,
        search: searchReducer,
        name: nameReducer,
    }
})

export default store