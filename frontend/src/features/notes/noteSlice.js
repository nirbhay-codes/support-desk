import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import noteService from './noteService'

// NOTE: removed isLoading, isSuccess, isError, message and reset
// loading can be infered from presence or absence of notes
// success can be infered from presence or absence of notes
// error meassages can be recieved at component level from our AsyncThunkAction
// reset was never actually used
const initialState = {
  notes: null,
}

export const getNotes = createAsyncThunk(
  'notes/getAll',
  async (ticketId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await noteService.getNotes(ticketId, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Create ticket note
export const createNote = createAsyncThunk(
  'notes/create',
  async ({noteText, ticketId}, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await noteService.createNote(noteText, ticketId, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

const notesSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNotes.pending, (state) => {
        // NOTE: reset notes to null on pending so we can show a Spinner while
        // fetching notes
        state.notes = null
      })
      .addCase(getNotes.fulfilled, (state, action) => {
        // NOTE: even if there are no notes for the ticket we get an empty
        // array, so we can use this to detect if we have notes or are fetching
        // notes. Payload will be an array of notes or an empty array, either
        // means we have finished fetching the notes.
        state.notes = action.payload
      })
      .addCase(createNote.fulfilled, (state, action) => {
        state.notes.push(action.payload)
      })
  },
})

export default notesSlice.reducer
