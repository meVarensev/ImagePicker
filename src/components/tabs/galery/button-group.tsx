import React from 'react';
import style from "./galery.module.scss";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import {Button} from "@mui/material";
import OpenWithRoundedIcon from "@mui/icons-material/OpenWithRounded";
import {styled} from "@mui/system";
import {FileUpload} from "./file-upload";


const MyButton = styled(Button)(({theme}) => ({
    background: "var(--btn-color-grey)",
    color: "black",
    '&:hover': {
        backgroundColor: "var(--btn-color-grey-hover)",
    },

}));

type TypeUploadedFile =  {
    url: string;
    filename: string;
    mimetype: string;
    size: number;
}

const ButtonGroup = () => {
    const handleFileUpload = (file: TypeUploadedFile) => {
        // Handle the uploaded file data here
        console.log('Uploaded file:', file);
    };
    return (
        <div className={style.buttonGroup}>
            <div style={{display: "flex"}}>
                <MyButton variant="contained" disableElevation
                          startIcon={<ClearRoundedIcon/>}>
                    Очистить
                </MyButton>

                <FileUpload onFileUpload={handleFileUpload} />
            </div>

            <Button variant="text" disableElevation style={{color: "black"}}
                    startIcon={<OpenWithRoundedIcon/>}>
                Развернуть
            </Button>
        </div>
    );
};

export {ButtonGroup};
