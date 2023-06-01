import React from 'react';
import style from "./galery.module.scss";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import {Button} from "@mui/material";
import OpenWithRoundedIcon from "@mui/icons-material/OpenWithRounded";
import {styled} from "@mui/system";
import {FileUpload} from "./file-upload";
import {TypeUploadedFile} from "../../../helper/types";
import {useAppDispatch} from "../../../hooks/redux-hooks";
import {addPhoto} from "../../../store/file-slice";


const MyButton = styled(Button)(({theme}) => ({
    background: "var(--btn-color-grey)",
    color: "black",
    '&:hover': {
        backgroundColor: "var(--btn-color-grey-hover)",
    },

}));



const ButtonGroup = () => {
    const dispatch = useAppDispatch()

    const handleFileUpload = (file: TypeUploadedFile) => {
        if(file){
            console.log('Uploaded file:', file);

            const uploadedFile = {
                url: file.url,
                filename: file.filename,
                mimetype: file.mimetype,
                size: file.size,
            };

            dispatch(addPhoto(uploadedFile))
        }
        // Handle the uploaded file data here


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
