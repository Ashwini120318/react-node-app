import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface AuthState {
    user: any,
    loading: boolean
}

const initialState: AuthState = {
    user: null,
    loading: false

}

export const registerUser = createAsyncThunk("auth/register", async (data: {name: string, email: string, password: string}) => {
    const response = await axios.post("http://localhost:5000/api/auth/register", data);
    return response.data;
})

export const loginUser = createAsyncThunk(
    "auth/login", async (data: {email: string, password: string}) => {
        const response = await axios.post(
            "http://localhost:5000/api/auth/login",
        data
    );
    return response.data;
        
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: state => {
            state.user = null;
          }
    },
    extraReducers: builder => {
      builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload
      })

    }
  });

  export const {logout } = authSlice.actions

  export default authSlice.reducer;
