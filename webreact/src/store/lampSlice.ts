import {Lamp} from "../assets/utils/Lamp";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {defaultSearchOptions, SearchOptions} from "../assets/utils/SearchOptions";
import LampService from "../services/LampService";

export const getLamps = createAsyncThunk(
    'lamp/getLamps',
    async (SearchOptions: SearchOptions, thunkAPI) => {
        return LampService.getLamps(SearchOptions);
    }
);

export const getLampById = createAsyncThunk(
    'lamp/getLampById',
    async (id: string) => {
        const response = await LampService.getLampById(id);
        return response.data
    }
);

interface LampSlice {
    lamp: Lamp[] | null;
    selectedLamp: Lamp | null;
    searchOptions: SearchOptions;
    status: string;
    error: string | null;
}

const initialStateLamp: LampSlice = {
    lamp: [] as Lamp[],
    selectedLamp: null,
    searchOptions: defaultSearchOptions,
    status: 'pending',
    error: null,
}

const lampSlice = createSlice({
    name: 'lamp',
    initialState: initialStateLamp,
    reducers: {
        setSearchOptions(state, action: PayloadAction<SearchOptions>) {
            state.searchOptions = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getLamps.pending, (state) => {
                state.status = 'pending';
                state.error = null;
            })
            .addCase(getLamps.fulfilled, (state, action) => {
                state.lamp = action.payload.data;
                state.status = 'fulfilled';
                state.error = null;
            })
            .addCase(getLamps.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload as string;
            })
            .addCase(getLampById.pending, (state) => {
                state.status = 'pending';
                state.error = null;
            })
            .addCase(getLampById.fulfilled, (state, action) => {
                state.selectedLamp = action.payload;
                state.status = 'fulfilled';
                state.error = null;
            })
            .addCase(getLampById.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload as string;
            });
    }
});


const lampReducer = lampSlice.reducer;

export const {
    setSearchOptions,
} = lampSlice.actions;

export {initialStateLamp};

export default lampReducer;