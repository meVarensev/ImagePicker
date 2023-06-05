import styles from "./basic-modal.module.scss";
import {Alert, AlertTitle, Stack, Typography} from "@mui/material";
import React from "react";
import {IPropsModalValue} from "../../helper/types";
interface IShowInfo {
    props: IPropsModalValue
}

const ShowInfo: React.FC<IShowInfo> = ({props}) => {
    const {severity, alertTitle, text, strongText}: IPropsModalValue = props

    return (
        <Stack className={styles.infoContainer} spacing={2}>
            <Alert severity={severity} className={styles.Severity}>
                <AlertTitle>{alertTitle}</AlertTitle>
                <Typography>
                    {text} - <strong>{strongText}</strong>
                </Typography>
            </Alert>
        </Stack>
    );
};

export {ShowInfo}


