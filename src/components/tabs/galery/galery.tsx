import React from 'react';
import {Button} from "@mui/material";
import {ButtonGroup} from "./button-group";
import Box from "@mui/material/Box";
import {FileUpload} from "./file-upload";


const GaleryTab = () => {

    return (
        <>
            <ButtonGroup/>
           <Box sx={{
                   width: "100%",
                   height: "100vh"}}>

                   {/*<Button>Добавить фотографию</Button>*/}

                   <FileUpload/>


           </Box>
        </>
    );
};

export {GaleryTab};
