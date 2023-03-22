import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const name = 'userInfo'

interface User {
    user_nickname : string;
    user_id : string | any; 
}

const initialState : User = {
    user_nickname : "",
    user_id : "",
}

export const userSlice = createSlice({
    name,
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user_nickname = action.payload.user_nickname;
            state.user_id = action.payload.user_id;
          },
        setNickName: (state, action: PayloadAction<string>) => {
              state.user_nickname = action.payload;
            },
        setId: (state, action: PayloadAction<string>) => {
              state.user_id = action.payload;
            },
        },
        extraReducers: {},
})

export const { setNickName, setId, setUser } = userSlice.actions;
