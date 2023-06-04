import React from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


interface IDotsMobileStepperProps {
    lengthImgList: number
    goToNextPhoto: () => void
    goToPreviousPhoto: () => void
    currentIndex: number
}

const DotsMobileStepper: React.FC<IDotsMobileStepperProps> = ({
                                                                  lengthImgList,
                                                                  goToNextPhoto,
                                                                  goToPreviousPhoto,
                                                                  currentIndex
                                                              }) => {


    const halfLengthImgList = Number((lengthImgList / 2).toFixed())
    const halfCurrentIndex = Number((currentIndex / 2).toFixed())
    return (
        <MobileStepper
            variant="text"
            steps={halfLengthImgList}
            position="static"
            activeStep={halfCurrentIndex}
            sx={{maxWidth: 400, flexGrow: 1, bgcolor: 'transparent'}}
            nextButton={
                <Button size="small" onClick={goToNextPhoto}
                        disabled={halfCurrentIndex === halfLengthImgList- 1}
                        endIcon={<KeyboardArrowRight/>}>
                    Next
                </Button>
            }
            backButton={
                <Button size="small" onClick={goToPreviousPhoto} disabled={currentIndex === 0}
                        startIcon={<KeyboardArrowLeft/>}>
                    Back
                </Button>
            }
        />
    );
};

export {DotsMobileStepper};
