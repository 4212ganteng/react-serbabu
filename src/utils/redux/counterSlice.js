import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        incrementByAmount : (state,action) => {
            // param1 yang state itu buat ambil initial state nya (yang diatas)
            // param2 itu buat ambil semua yang dikirim dari dispatch(incrementByAmount(nah disininya yang diambil))
            state.value += action.payload
        }
    }
})

// Jangan lupa di export biar bisa dipake
// Abis di export jangan lupa juga di definisikan di store.js
export const { incrementByAmount } = counterSlice.actions
export default counterSlice.reducer