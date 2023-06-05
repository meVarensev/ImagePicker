import {useState} from 'react';
import {TypeUploadedFile} from "../helper/types";

interface IUsePhotoGallery {
    getPhotosForCurrentIndex: () => TypeUploadedFile[];
    goToNextPhoto: () => void;
    currentIndex: number;
    goToPreviousPhoto: () => void
}

const usePhotoGallery = (draggedImage: TypeUploadedFile[] , value: number): IUsePhotoGallery => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextPhoto = () => {
        setCurrentIndex((prevIndex) => prevIndex + value);
    };

    const goToPreviousPhoto = () => {
        setCurrentIndex((prevIndex) => prevIndex - value);
    };

    const getPhotosForCurrentIndex = () => {
        return draggedImage.slice(currentIndex, currentIndex + value);
    };

    return {
        currentIndex,
        goToNextPhoto,
        goToPreviousPhoto,
        getPhotosForCurrentIndex,
    };
}

//TODO: in progress

export {usePhotoGallery}
