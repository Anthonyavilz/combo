import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: null,
    username: null,
    userId: null,
    isAithenticated: false,
    expiration: null
}

const authSlice = createSlice({
    name: 'totk-auth',
    initialState,
    reducers: {
        setAuthData: (state, action) => {
            state.token = action.payload.token
            state.username = action.payload.username
            state.userId = action.payload.userId
            state.isAithenticated = true
            state.expiration = action.payload.exp
        },
        clearAuthData: (state) => {
            state.token = null
            state.username = null
            state.userId = null
            state.isAithenticated = false
            state.expiration = null
        }
    }
})

export const { setAuthData, clearAuthData } = authSlice.actions

export default authSlice.reducer