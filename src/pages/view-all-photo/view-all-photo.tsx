import React, {DragEvent} from 'react';
import {Container} from "../../components/ui/container/container";
import {ImageList, ImageListItem, Box, Button} from "@mui/material";
import {useAppSelector} from "../../hooks/redux-hooks";
import {TypeUploadedFile} from "../../helper/types";
import { useNavigate} from "react-router-dom";
import FirstPageIcon from '@mui/icons-material/FirstPage';
import {Header} from "../../components/header/header";
const ViewAllPhoto = () => {
    const filesGalery = useAppSelector((state) => state.files.filesGalery)
    const navigate = useNavigate();
    const navigateHome = () => navigate('/');
    const handleDragStart = (e: DragEvent<HTMLImageElement>, file: TypeUploadedFile) => {
        e.dataTransfer.setData("text/plain", JSON.stringify(file));
    };

    return (
        <Container>
            <Box sx={{minHeight:"100vh"}}>
                {/*<Button variant="contained"   onClick={navigateHome}*/}
                {/*        startIcon={<FirstPageIcon/>}>*/}
                {/*    Главный экран*/}
                {/*</Button>*/}
                <Header/>
                <ImageList variant="masonry" cols={3} gap={10}>
                    {filesGalery.map((file) => (
                        <ImageListItem key={file.filename}>
                            <img
                                src={`${file.url}`}
                                srcSet={`${file.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={file.filename}
                                loading="lazy"
                                onDragStart={(e) => handleDragStart(e, file)}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Container>
    );
};

export {ViewAllPhoto};
