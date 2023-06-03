import React from 'react';
import style from "./tab-section.module.scss";
import {BasicTabs} from "./basic-tabs";

const TabsSection = () => {
    return (
        <section className={style.tabSection}>
            <div className={style.wrapper}>
                <BasicTabs/>
            </div>
        </section>
    );
};

export {TabsSection};
