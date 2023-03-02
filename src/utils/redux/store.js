import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counterSlice"

export const store = configureStore({
  reducer: {
    // Nah didalam sini ya buat manggil yang tadi kalau untuk nama bebas sebenernya
    // Tapi biasanya kalau disini namanya keganti jadi reducer (sebelumnya kan counterSlice jadi counterReducer)
    // Pergi ke file pages/Home/Index.jsx buat liat contoh penggunaan dispatch nya
    counter : counterReducer
  },
})