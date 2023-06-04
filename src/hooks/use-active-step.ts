import { useState } from 'react';

const useActiveStep = (initialStep: number = 0) => {
    const [activeStep, setActiveStep] = useState(initialStep);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return { activeStep, handleNext, handleBack };
};

export {useActiveStep};
