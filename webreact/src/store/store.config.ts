import { configureStore } from '@reduxjs/toolkit';
import lampReducer from "./lampSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
    reducer: {
        lampReducer,
        cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
