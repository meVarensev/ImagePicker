import React from 'react';
import { useInView } from "react-intersection-observer";
import { ImageListItem } from "@mui/material";
import { TypeUploadedFile } from "../../../helper/types";

interface ImageItemProps {
    file: TypeUploadedFile;
    onClick?: (file: TypeUploadedFile) => void | null;
    onDragStart: (event: React.DragEvent<HTMLImageElement>, file: TypeUploadedFile) => void;
}

const ImageItem: React.FC<ImageItemProps> = ({ file, onClick, onDragStart }) => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <div ref={ref}>
            <ImageListItem key={file.filename} >
                {inView && (
                    <img

                        style={{ cursor: 'pointer' }}
                        src={`${file.url}`}
                        srcSet={`${file.url}`}
                        alt={file.filename}
                        draggable={true}
                        onDragStart={(e) => onDragStart(e, file)}
                        onClick={() => onClick ? onClick(file) : null}
                    />
                ) }
            </ImageListItem>
        </div>

    );
};

export {ImageItem};
