import React from 'react';
import {ButtonGroup} from "./button-group";
import Box from "@mui/material/Box";

import {Typography} from '@mui/material';

const GaleryTab = () => {
    return (
        <>
            <ButtonGroup/>
            <Box sx={{
                width: "100%",
                height: "100vh"
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
            </Box>
        </>
    );
};

export {GaleryTab};
