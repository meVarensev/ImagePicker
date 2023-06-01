import React from 'react';
import {Container} from "../ui/container/container";


import style from "./header.module.scss"

const Header = () => {


    return (
        <header>
            <Container>
                <div className={style.wrapper}>
                    <p className={style.title}>Title</p>
                </div>
            </Container>
        </header>
    );
};

export {Header};
