import React from 'react';
import style from "./tab-section.module.scss";
import {BasicTabs} from "./basic-tabs";

const TabsSection = () => {
    return (
        <div className={style.tabSection}>
            <div className={style.wrapper}>
                <BasicTabs/>
            </div>
        </div>
    );
};

export {TabsSection};
