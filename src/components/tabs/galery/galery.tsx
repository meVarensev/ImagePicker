import React from 'react';
import {ButtonGroup} from "./button-group";
import Box from "@mui/material/Box";
import {ImageList, ImageListItem, Typography} from '@mui/material';
import {useAppSelector} from '../../../hooks/redux-hooks';
import {TypeUploadedFile} from "../../../helper/types";


const GaleryTab = () => {
    const files: TypeUploadedFile[] = useAppSelector((state) => state.files.files)
    console.log(files)
    return (
        <>
            <ButtonGroup/>
            <Box sx={{
                width: "100%",
            }}>

                {(files.length === 0 )&& <Box style={{
                    width: 200,
                    height: 125,
                    padding: 20,
                    border: '1px dashed grey',
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center"
                }}>
                    <Typography>
                        Добавить фотографию
                    </Typography>
                </Box>}

                <Box sx={{width: "100%", height: 520, overflowY: 'scroll'}}>
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
            </Box>
        </>
    )
};

export {GaleryTab};
