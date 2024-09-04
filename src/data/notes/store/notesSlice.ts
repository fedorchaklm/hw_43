import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note } from "../model/Note.interface";

const initialState: Array<Note> = [];

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<Note>) {
      state.unshift(action.payload);
    },
    clearNotes: () => {
      return [];
    },
  },
});

export const { addNote, clearNotes } = notesSlice.actions;
