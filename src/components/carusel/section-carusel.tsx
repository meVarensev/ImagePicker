import React from 'react';
import style from "./carusel.module.scss"
import {DropFile} from "./drop-file";
import {DotsMobileStepper} from "./dots-mobile-stepper";
import {useActiveStep} from "../../hooks/use-active-step";
import {useAppSelector} from "../../hooks/redux-hooks";

const SectionCarusel = () => {
    const {handleNext, handleBack, activeStep} = useActiveStep()
    const draggedImage = useAppSelector((state) => state.files.draggedImages)


    return (
        <section className={style.caruselSection}>
            <div className={style.wrapper}>
              <DropFile activeStep={activeStep} draggedImage={draggedImage}/>
                {draggedImage.length !== 0 && (
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
                        <DotsMobileStepper
                            lengthImgList={draggedImage.length}
                            handleNext={handleNext}
                            handleBack={handleBack}
                            activeStep={activeStep}/>
                    </div>
                )}
            </div>
        </section>
    );
};

export {SectionCarusel};
