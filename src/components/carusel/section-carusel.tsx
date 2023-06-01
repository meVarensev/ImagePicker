import React from 'react';
import style from "./carusel.module.scss"
import {BookAnimation} from "./book-animation";

const SectionCarusel = () => {
    return (
        <section className={style.caruselSection}>
            <div className={style.wrapper}>
              <BookAnimation/>
            </div>
        </section>
    );
};

export {SectionCarusel};
