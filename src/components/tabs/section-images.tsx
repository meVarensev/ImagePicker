import React, {DragEvent} from 'react';
import {Box} from '@mui/material';
import {ImageList, ImageListItem} from '@mui/material';
import {TypeUploadedFile} from "../../helper/types";

interface ISectionImagesProps {
    files: TypeUploadedFile[];
}

const SectionImages: React.FC<ISectionImagesProps> = ({files}) => {
    const handleDragStart = (e: DragEvent<HTMLImageElement>, file: TypeUploadedFile) => {
        e.dataTransfer.setData("text/plain", JSON.stringify(file));
    };

    return (
        <Box sx={{height: 520, overflowY: 'scroll'}}>
            <ImageList variant="masonry" cols={5} gap={8}>
                {files.map((file) => (
                    <ImageListItem key={file.filename}>
                        <img
                            src={`${file.url}`}
                            srcSet={`${file.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={file.filename}
                            loading="lazy"
                            draggable={true}
                            onDragStart={(e) => handleDragStart(e, file)}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
};

export {SectionImages};

