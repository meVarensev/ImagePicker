import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {useAppSelector} from '../../hooks/redux-hooks';
import styles from "./basic-modal.module.scss";
import {ShowInfo} from "./show-info";
import {modalValueErrorInfo, modalValueSuccessInfo} from "../../helper/modal-value";
import {Box} from "@mui/material";
import {useNavigate} from "react-router-dom";

function BasicModal() {
    const [open, setOpen] = useState(false);
    const draggedImage = useAppSelector((state) => state.files.draggedImages);
    const navigate = useNavigate();

    const navigatePayment = () => navigate('/payment');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    return (
        <div>
            <Button
                variant="contained"
               className={styles.myButtonColor}
                onClick={handleOpen}
            >
                В корзину
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {!draggedImage.length ?
                    <Box className={styles.modal}>
                        <ShowInfo props={modalValueErrorInfo}/>
                    </Box>
                    :
                    <Box className={styles.modal}>
                        <ShowInfo props={modalValueSuccessInfo}/>
                        <Button
                            variant="contained"
                            className={styles.myButton}
                            onClick={navigatePayment}
                        >
                            Перейти в корзину
                        </Button>
                    </Box>
                }
            </Modal>
        </div>
    );
}

export {BasicModal};
