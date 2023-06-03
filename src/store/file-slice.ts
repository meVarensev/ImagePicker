import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {TypeUploadedFile} from "../helper/types";


interface IInitialState {
    files: TypeUploadedFile[]
}

const initialState: IInitialState = {
    files: []
}

export const fileSlice = createSlice({
    name: 'files',
    initialState,
    reducers: {
        addPhoto: (state, action: PayloadAction<TypeUploadedFile>) => {
            state.files.push(action.payload)
        },
        clearPhoto: (state) => {
            state.files = []
        },
    },
})

export const {addPhoto, clearPhoto} = fileSlice.actions


const fileReducer = fileSlice.reducer

export {fileReducer}
