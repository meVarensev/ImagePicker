import React from 'react';
import {ButtonGroup} from "./button-group";
import Box from "@mui/material/Box";
import {Typography} from '@mui/material';
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

                <Box style={{
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
                </Box>

                {files.map((file) => (
                    <Box mt={2} key={file.filename}>
                        <img src={file.url} alt={file.filename}  width="200" height="200"/>
                    </Box>
                ))}


            </Box>
        </>
    )
};

export {GaleryTab};
