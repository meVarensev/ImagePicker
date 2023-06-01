import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {TypeUploadedFile} from "../helper/types";


interface IInitialState {
    files: TypeUploadedFile[]
}

// Define the initial state using that type
const initialState:IInitialState= {
    files: []
}

export const fileSlice = createSlice({
    name: 'files',
    initialState,
    reducers: {
        addPhoto: (state ,  action: PayloadAction<TypeUploadedFile>) => {
            state.files.push(action.payload)
        }
    },
})

export const { addPhoto } = fileSlice.actions


const fileReducer = fileSlice.reducer

export {fileReducer}
