import React from 'react';
import {Button} from "@mui/material";
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import OpenWithRoundedIcon from '@mui/icons-material/OpenWithRounded';
import style from "./galery.module.scss"
import {styled} from '@mui/system';

const MyButton = styled(Button)(({theme}) => ({
    background: "var(--btn-color-grey)",
    color: "black",
    marginLeft: "15px",
    '&:hover': {
        backgroundColor: "var(--btn-color-grey-hover)",
    },

}));
const GaleryTab = () => {

    return (
        <>
            <div className={style.buttonGroup}>
                <div>
                    <MyButton variant="contained" disableElevation
                              startIcon={<ClearRoundedIcon/>}>
                        Очистить
                    </MyButton>

                    <MyButton variant="contained" disableElevation
                              startIcon={<DeleteForeverRoundedIcon/>}>
                        Выбрать
                    </MyButton>
                </div>

                <Button variant="text" disableElevation style={{color: "black"}}
                          startIcon={<OpenWithRoundedIcon/>}>
                    Развернуть
                </Button>
            </div>
        </>
    );
};

export {GaleryTab};
