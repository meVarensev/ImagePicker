import React from 'react';
import style from "./header.module.scss"
import {ProjectDetails} from "./project-details";
import {BasicModal} from "../modal/modal";

const Header = () => {
    return (
        <section className={style.headerSection}>
            <div className={style.wrapper}>
                <ProjectDetails title="Мой проект" size="400x280"/>
                <BasicModal/>
            </div>
        </section>
    );
};

export {Header};
