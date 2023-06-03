import React from 'react';
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";

const DefaultImg = () => {
    return (
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
    );
};

export {DefaultImg};
