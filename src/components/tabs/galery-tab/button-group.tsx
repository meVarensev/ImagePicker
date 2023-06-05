import React from 'react';
import style from "./galery.module.scss";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { Button} from "@mui/material";
import OpenWithRoundedIcon from "@mui/icons-material/OpenWithRounded";
import {styled} from "@mui/system";
import {FileUpload} from "./file-upload";
import {useAppDispatch} from "../../../hooks/redux-hooks";
import { clearPhoto} from "../../../store/file-slice";
import {useNavigate} from "react-router-dom";

const MyButton = styled(Button)(({theme}) => ({
    background: "var(--btn-color-grey)",
    color: "black",
    '&:hover': {
        backgroundColor: "var(--btn-color-grey-hover)",
    },

}));



const ButtonGroup = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const navigateAllPhoto = () => navigate('/allPhoto');
    const handleClickClearPhotos = () => {
      dispatch(clearPhoto())
    }

    return (
        <div className={style.buttonGroup}>
            <div style={{display: "flex"}}>
                <MyButton variant="contained" disableElevation onClick={handleClickClearPhotos}
                          startIcon={<ClearRoundedIcon/>}>
                    Очистить
                </MyButton>
                <FileUpload />
            </div>

            <Button variant="text" disableElevation style={{color: "black"}} onClick={navigateAllPhoto}
                    startIcon={<OpenWithRoundedIcon/>}>
                Развернуть
            </Button>

        </div>
    );
};

export {ButtonGroup};
