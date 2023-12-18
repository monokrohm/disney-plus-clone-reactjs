import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import userReducer from "../features/UserSlice"
import movieReducer from "../features/MovieSlice"

export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
})