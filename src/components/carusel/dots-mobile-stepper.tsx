import React from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import {useActiveStep} from "../../hooks/use-active-step";

interface IDotsMobileStepperProps {
    lengthImgList: number
    handleNext: () => void
    handleBack: () => void
    activeStep: number
}

const DotsMobileStepper: React.FC<IDotsMobileStepperProps> = ({lengthImgList, handleNext, handleBack, activeStep}) => {
    return (
        <MobileStepper
            variant="text"
            steps={lengthImgList}
            position="static"
            activeStep={activeStep}
            sx={{maxWidth: 400, flexGrow: 1, bgcolor: 'transparent'}}
            nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === lengthImgList - 1}
                        endIcon={<KeyboardArrowRight/>}>
                    Next
                </Button>
            }
            backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0} startIcon={<KeyboardArrowLeft/>}>
                    Back
                </Button>
            }
        />
    );
};

export {DotsMobileStepper};
