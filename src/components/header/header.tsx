import React from 'react';
import style from "./header.module.scss"
import {ProjectDetails} from "./project-details";
import {Button} from "@mui/material";

const Header = () => {
    return (
        <section className={style.headerSection}>
            <div className={style.wrapper}>
                <ProjectDetails title="Мой проект" size="400x280"/>
                <Button variant="contained" style={{background: "black", padding: "10px 20px"}}>В корзину</Button>
            </div>
        </section>
    );
};

export {Header};
