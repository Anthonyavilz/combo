import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    search: ''
}

const searchSlice = createSlice({
    name: 'search-feature',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.value = action.payload
        },
        clearSearch: (state) => {
            state.value = ''
        }
    }
})

export const { setSearch, clearSearch } = searchSlice.actions

export default searchSlice.reducer