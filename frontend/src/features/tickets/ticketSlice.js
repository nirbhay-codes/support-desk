import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tickets: [],
  ticket: {},
}

export const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
})

export default ticketSlice.reducer
