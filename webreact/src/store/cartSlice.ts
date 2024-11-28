import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import CartService from "../services/CartService";
import { CartDTO } from "../assets/utils/CartDto";

export const getCarts = createAsyncThunk(
    'cart/getCarts',
    async (userId: string) => {
        const response = await CartService.getCarts(userId);
        return response.data;
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
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCarts.pending, (state) => {
                state.status = 'pending';
                state.error = null;
            })
            .addCase(getCarts.fulfilled, (state, action: PayloadAction<CartDTO[]>) => {
                state.cart = action.payload;
                state.status = 'fulfilled';
                state.error = null;
            })
            .addCase(getCarts.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message || 'Failed to fetch carts';
            });
    }
});

const cartReducer = cartSlice.reducer;

export { initialStateCart };

export default cartReducer;