import React from 'react';
import style from "./carusel.module.scss"
import {DropFile} from "./drop-file";
import {DotsMobileStepper} from "./dots-mobile-stepper";
import {usePhotoGallery} from "../../hooks/use-photo-gallery";
import {useAppSelector} from "../../hooks/redux-hooks";
import {IDotsMobileStepperProps} from "../../helper/types";

const SectionCarusel = () => {
    const draggedImage = useAppSelector((state) => state.files.draggedImages)
    const {
        currentIndex,
        goToNextPhoto,
        goToPreviousPhoto,
        getPhotosForCurrentIndex,
    } = usePhotoGallery(draggedImage)

    const dotsProps: IDotsMobileStepperProps = {
        lengthImgList: draggedImage.length,
        goToNextPhoto: goToNextPhoto,
        goToPreviousPhoto: goToPreviousPhoto,
        currentIndex: currentIndex,
    }

    return (
        <section className={style.caruselSection}>
            <div className={style.wrapper}>
                <DropFile getPhotosForCurrentIndex={getPhotosForCurrentIndex}/>
                {draggedImage.length !== 0 && (
                    <div className={style.wrapperDots}>
                        <DotsMobileStepper props={dotsProps}/>
                    </div>
                )}
            </div>
        </section>
    );
};

export {SectionCarusel};
