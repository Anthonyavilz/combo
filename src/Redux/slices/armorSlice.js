import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    helmOptions: [],
    chestOptions: [],
    legOptions: []
}

const armorSlice = createSlice({
    name: 'armor',
    initialState,
    reducers: {
        setHelmOptions: (state, action) => {
            state.helmOptions = action.payload
        },
        setChestOptions: (state, action) => {
            state.chestOptions = action.payload
        },
        setLegOptions: (state, action) => {
            state.legOptions = action.payload
        },
        clearOptions: (state) => {
            state.helmOptions = []
            state.chestOptions = []
            state.legOptions = []
        },
    }
})

export const { 
    setHelmOptions,
    setChestOptions,
    setLegOptions,
    clearOptions
} = armorSlice.actions

export default armorSlice.reducer