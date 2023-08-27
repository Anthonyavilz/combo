import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    armorName: ''
}

const armorNameSlice = createSlice({
    name: 'armor-name',
    initialState,
    reducers: {
        setArmorName: (state, action) => {
            state.armorName = action.payload
        },
        clearArmorName: (state) => {
            state.armorName = ''
        }
    }
})

export const { setArmorName, clearArmorName } = armorNameSlice.actions

export default armorNameSlice.reducer