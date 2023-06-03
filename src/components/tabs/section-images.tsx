import React from 'react';
import {ImageList, ImageListItem} from "@mui/material";
import Box from "@mui/material/Box";
import {TypeUploadedFile} from "../../helper/types";

interface ISectionImagesProps {
    files: TypeUploadedFile[]
}

const SectionImages: React.FC<ISectionImagesProps> = ({files}) => {
    const handleClickImg = (file) => {
        console.log(file)
    }

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
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
};

export {SectionImages};


// onClick={() => handleClickImg(file)}
