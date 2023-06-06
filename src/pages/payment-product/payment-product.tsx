import React from 'react';
import {Container} from "../../components/ui/container/container";
import {Box, Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const PaymentProduct = () => {
    const navigate = useNavigate();
    const navigateMain = () => navigate('/');

    return (
        <Container>
            <Box sx={{minHeight: "100vh"}}>
               <Box  sx={{width: "100%" , borderBottom: `var(--border)`}}>
                   <Button variant="contained" sx={{margin: 5}} onClick={navigateMain}>
                       На главную
                   </Button>
               </Box>
                <p style={{fontSize: "100px" , textAlign: "center"}}>ОПЛАТА</p>
            </Box>
        </Container>
    );
};

export {PaymentProduct};
