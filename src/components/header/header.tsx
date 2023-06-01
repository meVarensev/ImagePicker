import React from 'react';
import {Container} from "../ui/container/container";
import style from "./header.module.scss"
import {ProjectDetails} from "./project-details";
import {Button} from "@mui/material";

const Header = () => {

    return (
        <header>
            <Container>
                <div className={style.wrapper}>
                    <ProjectDetails title="Мой проект" size="400x280"/>
                    <Button variant="contained" style={{background: "black" , padding: "10px 20px"}}>В корзину</Button>
                </div>
            </Container>
        </header>
    );
};

export {Header};
