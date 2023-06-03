import React from 'react';
import {ButtonGroup} from "./button-group";
import Box from "@mui/material/Box";
import {ImageList, ImageListItem, Typography} from '@mui/material';
import {useAppSelector} from '../../../hooks/redux-hooks';
import {TypeUploadedFile} from "../../../helper/types";
import {DefaultImg} from "../default-img";
import {SectionImages} from "../section-images";


const GaleryTab = () => {
    const files: TypeUploadedFile[] = useAppSelector((state) => state.files.filesGalery)

    return (
        <Box>
            <ButtonGroup/>
            {!files.length && <DefaultImg/>}
            {files.length > 0 && <SectionImages files={files}/>}
        </Box>

    )
};

export {GaleryTab};
