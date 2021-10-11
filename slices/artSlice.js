import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
}

// Create a slice
export const artSlice = createSlice({
  name: "art",
  initialState,
  reducers: {
   // Actions
    addToArt: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromArt: (state, action) => {
      const index = state.items.findIndex(
        artItem => artItem.id === action.payload.id
      );

      // Make a copy of the current basket
      let newArt = [...state.items]

      if (index >= 0) {
        //  The item exists in the basket ...remove it
        newArt.splice(index, 1)
      } else {
        //  the item does not exist
        console.log(`cannot remove the Art ${action.payload.id}`)
      }

      state.items = newArt
    }
  }
})

export const {addToArt, removeFromArt} = artSlice.actions;

export const selectItems = (state) => state.art.items

export default artSlice.reducer;