import React, {useState} from 'react';
import style from "./galery.module.scss";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import {Button} from "@mui/material";
import OpenWithRoundedIcon from "@mui/icons-material/OpenWithRounded";
import {styled} from "@mui/system";
import {FileUpload} from "./file-upload";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux-hooks";
import {clearPhoto} from "../../../store/file-slice";
import {useNavigate} from "react-router-dom";
import {TypeUploadedFile} from "../../../helper/types";
import {ShowInfo} from "../../modal/show-info";
import {modalValueWarningInfo} from "../../../helper/modal-value";

const MyButton = styled(Button)(({theme}) => ({
    background: "var(--btn-color-grey)",
    color: "black",
    '&:hover': {
        backgroundColor: "var(--btn-color-grey-hover)",
    },

}));

interface IButtonGroupProps {
    navigateAllPhoto: () => void
}

const ButtonGroup:React.FC<IButtonGroupProps> = ({navigateAllPhoto}) => {
    const dispatch = useAppDispatch()
    const handleClickClearPhotos = () => {
        dispatch(clearPhoto())
    }

    return (
        <>
            <div className={style.buttonGroup}>
                <div style={{display: "flex"}}>
                    <MyButton variant="contained" disableElevation onClick={handleClickClearPhotos}
                              startIcon={<ClearRoundedIcon/>}>
                        Очистить
                    </MyButton>
                    <FileUpload/>
                </div>
                <Button variant="text" disableElevation style={{color: "black"}} onClick={navigateAllPhoto}
                        startIcon={<OpenWithRoundedIcon/>}>
                    Развернуть
                </Button>
            </div>
        </>
    );
};

export {ButtonGroup};
