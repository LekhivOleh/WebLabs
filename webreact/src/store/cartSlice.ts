import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import CartService from "../services/CartService";
import {CartDTO} from "../assets/utils/CartDto";
import {Cart} from "../assets/utils/Cart";

export const getCarts = createAsyncThunk(
    'cart/getCarts',
    async () => {
        return CartService.getCarts();
    }
);

interface CartSlice {
    cart: CartDTO[] | null;
    status: string;
    error: string | null;
}

const initialStateCart: CartSlice = {
    cart: [] as CartDTO[],
    status: 'pending',
    error: null,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialStateCart,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(getCarts.pending, (state) => {
                state.status = 'pending';
                state.error = null;
            })
            .addCase(getCarts.fulfilled, (state, action) => {
                state.cart = action.payload.data;
                state.status = 'fulfilled';
                state.error = null;
            })
            .addCase(getCarts.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload as string;
            })

    }
});

const cartReducer = cartSlice.reducer;

export {initialStateCart};

export default cartReducer;