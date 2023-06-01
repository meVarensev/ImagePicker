import React from 'react';
import {Typography} from "@mui/material";

interface IProjectDetailsProps {
    title: string;
    size: string;
}

const ProjectDetails: React.FC<IProjectDetailsProps> = ({title, size}) => {
    return (
        <div>
            <Typography variant="h5" style={{color: '#161c80'}}>{title}</Typography>
            <Typography variant="subtitle1" style={{color: '#c1c1c1'}}>
                Размер: {size} <br/> мм (в развороте)
            </Typography>
        </div>
    );
};
export {ProjectDetails};
