import React from 'react';
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import style from "./logo.module.scss";

const Logo = () => {
    return (
        <section className={style.logoSection}>
            <AutoStoriesIcon fontSize="large"/>
        </section>
    );
};

export {Logo};
