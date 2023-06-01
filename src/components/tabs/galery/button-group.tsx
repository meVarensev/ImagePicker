import React from 'react';
import style from "./galery.module.scss";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import {Button} from "@mui/material";
import OpenWithRoundedIcon from "@mui/icons-material/OpenWithRounded";
import {styled} from "@mui/system";

const MyButton = styled(Button)(({theme}) => ({
    background: "var(--btn-color-grey)",
    color: "black",
    '&:hover': {
        backgroundColor: "var(--btn-color-grey-hover)",
    },

}));

const ButtonGroup = () => {
    return (
        <div className={style.buttonGroup}>
            <div>
                <MyButton variant="contained" disableElevation
                          startIcon={<ClearRoundedIcon/>}>
                    Очистить
                </MyButton>

                <MyButton variant="contained" disableElevation sx={{marginLeft: "15px"}}
                          startIcon={<DeleteForeverRoundedIcon/>}>
                    Выбрать
                </MyButton>
            </div>

            <Button variant="text" disableElevation style={{color: "black"}}
                    startIcon={<OpenWithRoundedIcon/>}>
                Развернуть
            </Button>
        </div>
    );
};

export {ButtonGroup};