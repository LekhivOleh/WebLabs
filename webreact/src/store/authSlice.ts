import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../assets/utils/User";
import AuthService from "../services/AuthService";

export const checkUser = createAsyncThunk(
    'auth/checkUser',
    async (token: string) => {
        const response = await AuthService.CheckUser(token);
        console.log(response);
        return response;
    }
);

interface AuthSlice {
    user: User | null;
    status: string;
    error: string | null;
    isLogged: boolean;
}

const initialStateAuth: AuthSlice = {
    user: null,
    status: 'pending',
    error: null,
    isLogged: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialStateAuth,
    reducers: {
        logout(state) {
            state.user = null;
            state.isLogged = false;
        },
        setLoggedIn(state, action: PayloadAction<boolean>) {
            state.isLogged = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(checkUser.pending, (state) => {
                state.status = 'pending';
                state.error = null;
            })
            .addCase(checkUser.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                {action.payload.data ? state.isLogged = true : state.isLogged = false}
                state.error = null;
            })
            .addCase(checkUser.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message || 'Failed to check user';
            });
    }
});

export const { logout, setLoggedIn } = authSlice.actions;

export default authSlice.reducer;