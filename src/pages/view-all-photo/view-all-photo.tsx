import React, {useMemo, DragEvent} from 'react';
import {Container} from "../../components/ui/container/container";
import {ImageList, Box} from "@mui/material";
import {useAppSelector} from "../../hooks/redux-hooks";
import {TypeUploadedFile} from "../../helper/types";
import {Header} from "../../components/header/header";
import {ImageItem} from "../../components/tabs/galery-tab/image-item";


const ViewAllPhoto = () => {
    const filesGalery = useAppSelector((state) => state.files.filesGalery);
    const memoizedFilesGalery = useMemo(() => filesGalery, [filesGalery]);

    const handleDragStart = (e: DragEvent<HTMLImageElement>, file: TypeUploadedFile) => {
        e.dataTransfer.setData("text/plain", JSON.stringify(file));
    };

    return (
        <Container>
            <Box sx={{minHeight: "100vh"}}>
                <Header/>
                <ImageList variant="masonry" cols={3} gap={10}>
                    {memoizedFilesGalery.map((file) => (
                        <ImageItem key={file.filename}
                                   file={file}
                                   onDragStart={handleDragStart}/>
                    ))}
                </ImageList>
            </Box>
        </Container>
    );
};

export {ViewAllPhoto};
