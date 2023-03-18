import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// cards 조회 Thunk
export const __getCardsThunk = createAsyncThunk(
    'GET_CARDS',
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get('http://3.38.102.57:3000/api/games')
            return thunkAPI.fulfillWithValue(data)
        }   catch (e) {
            return thunkAPI.rejectWithValue(e.code)
        }
    }   
)


// card 추가 Thunk
export const __addCardsThunk = createAsyncThunk(
    'ADD_CARDS',
    async (payload, thunkAPI) => {
        try {
            const { data } = await axios.post('http://3.38.102.57:3000/api/games', payload)
            return thunkAPI.fulfillWithValue(data)
        }   catch (e) {
            return thunkAPI.rejectWithValue(e.code)
        }
    }
)

const initialState = {
    cards: [],
    error: null,
    isLoading: false,
    isSuccess: false,
}

// const initialState = [
//     {
//         id: 0,
//         title: "",
//         optionA: "",
//         optionB: "",
//     }
// ];
// cards 조회 함수
export const cardsSlice = createSlice({
    name: "cards",
    initialState,
    reducer: {},
    extraReducers: {
        [__getCardsThunk.fulfilled]: (state, action) => {
            state.isLoading = false
            state.cards = action.payload
        },
    }
});

export const {} = cardsSlice.actions
export default cardsSlice.reducer