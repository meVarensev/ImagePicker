import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {TypeUploadedFile} from "../helper/types";


interface IInitialState {
    filesGalery: TypeUploadedFile[]
}

const initialState: IInitialState = {
    filesGalery: []
}

export const fileSlice = createSlice({
    name: 'files',
    initialState,
    reducers: {
        addPhoto: (state, action: PayloadAction<TypeUploadedFile[]>) => {
            state.filesGalery.push(...action.payload)
        },
        clearPhoto: (state) => {
            state.filesGalery = []
        },
    },
})

export const {addPhoto, clearPhoto} = fileSlice.actions


const fileReducer = fileSlice.reducer

export {fileReducer}
