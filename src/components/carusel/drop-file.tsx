import React, {DragEvent} from 'react';
import {motion} from 'framer-motion';
import {Box} from '@mui/material';
import {TypeUploadedFile} from '../../helper/types';
import {useAppDispatch} from "../../hooks/redux-hooks";
import {setDraggedImage} from "../../store/file-slice";

interface IDropFileProps {
    activeStep: number
    draggedImage: TypeUploadedFile[]
}

const DropFile: React.FC<IDropFileProps> = ({activeStep, draggedImage}) => {
    const dispatch = useAppDispatch()
    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        const file = JSON.parse(data);
        dispatch(setDraggedImage(file))
    };
    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    return (
            <div
                style={{height: 400, border: '1px dashed gray'}}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                {draggedImage.length !== 0 && (
                    <>
                        {draggedImage.map((item, index) => (
                            <motion.img
                                key={item.filename}
                                src={item.url}
                                alt={item.filename}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    display: index === activeStep ? 'block' : 'none'
                                }}
                            />
                        ))}
                    </>
                )}

                {draggedImage.length === 0 && (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%',
                        }}
                    >
                        <span>Перетащите изображение из галереи сюда</span>
                    </Box>
                )}

            </div>
    );
};

export {DropFile};