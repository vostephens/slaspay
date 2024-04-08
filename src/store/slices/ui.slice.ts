import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export enum modalType {
  "none"
}

interface UiState {
  modal: modalType | false
  modalState: any
}

const initialState: UiState = {
  modal: false,
  modalState: null
}

export const uiSlice = createSlice({
  name: "userInterface",
  initialState,
  reducers: {
    closeModal: (state) => {
      state.modal = false
      state.modalState = null
    },
    updateModalAndState: (state, action: PayloadAction<{ type: modalType; state: any }>) => {
      state.modal = action.payload.type
      state.modalState = action.payload.state
    }
  }
})

export const { closeModal, updateModalAndState } = uiSlice.actions
export default uiSlice.reducer
