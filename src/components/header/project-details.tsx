import React from 'react';
import {Button, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

interface IProjectDetailsProps {
    title: string;
    size: string;
}

const ProjectDetails: React.FC<IProjectDetailsProps> = ({title, size}) => {
    const navigate = useNavigate();
    const navigateHome = () => navigate('/');
    return (
        <div style={{cursor: "pointer"}} onClick={navigateHome}>
            <Typography variant="h5" style={{color: '#161c80'}}>{title}</Typography>
            <Typography variant="subtitle1" style={{color: '#c1c1c1'}}>
                Размер: {size} <br/> мм (в развороте)
            </Typography>
        </div>
    );
};
export {ProjectDetails};
