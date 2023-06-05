import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {TypeUploadedFile} from "../helper/types";

interface IInitialState {
    filesGalery: TypeUploadedFile[]
    draggedImages: TypeUploadedFile[]
}

const initialState: IInitialState = {
    filesGalery: [],
    draggedImages: []
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
            state.draggedImages = []
        },
        setDraggedImage: (state, action: PayloadAction<TypeUploadedFile>) => {
            const newImage = action.payload;
            const existingImage = state.draggedImages.find(
                (image) => image.filename === newImage.filename
            );

            if (!existingImage) {
                state.draggedImages.push(newImage);
            }
        },
    },
})

export const {addPhoto, clearPhoto, setDraggedImage} = fileSlice.actions


const fileReducer = fileSlice.reducer

export {fileReducer}
