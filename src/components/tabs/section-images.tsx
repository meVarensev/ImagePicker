import React, {DragEvent, useMemo} from 'react';
import {Box,} from '@mui/material';
import {ImageList, ImageListItem} from '@mui/material';
import {TypeUploadedFile} from "../../helper/types";
import {useAppDispatch} from "../../hooks/redux-hooks";
import {setDraggedImage} from "../../store/file-slice";
import {useInView} from 'react-intersection-observer';
import {ImageItem} from "./galery-tab/image-item";

interface ISectionImagesProps {
    files: TypeUploadedFile[];
}

const SectionImages: React.FC<ISectionImagesProps> = ({files}) => {
    const dispatch = useAppDispatch()

    const handleDragStart = (e: DragEvent<HTMLImageElement>, file: TypeUploadedFile) => {
        e.dataTransfer.setData("text/plain", JSON.stringify(file));
    };
    const handleClickImg = (img: TypeUploadedFile) => {
        dispatch(setDraggedImage(img))
    }
    const memoizedFilesGalery = useMemo(() => files, [files]);

    return (
        <Box sx={{height: 520, overflowY: 'scroll'}}>
            <ImageList variant="masonry" cols={5} gap={8}>
                {memoizedFilesGalery.map((file) => (
                        <ImageItem key={file.filename}
                            file={file}
                            onClick={handleClickImg}
                            onDragStart={handleDragStart}/>
                    ))}
            </ImageList>
        </Box>
    );
};

export default SectionImages;

