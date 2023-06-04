import {useState} from 'react';
import {TypeUploadedFile} from "../helper/types";

interface IUsePhotoGallery {
    getPhotosForCurrentIndex: () => TypeUploadedFile[];
    goToNextPhoto: () => void;
    currentIndex: number;
    goToPreviousPhoto: () => void
}


const usePhotoGallery: (draggedImage: TypeUploadedFile[]) => IUsePhotoGallery = (draggedImage: TypeUploadedFile[]) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextPhoto = () => {
        setCurrentIndex((prevIndex) => prevIndex + 2);
    };

    const goToPreviousPhoto = () => {
        setCurrentIndex((prevIndex) => prevIndex - 2);
    };

    const getPhotosForCurrentIndex = () => {
        return draggedImage.slice(currentIndex, currentIndex + 2);
    };

    return {
        currentIndex,
        goToNextPhoto,
        goToPreviousPhoto,
        getPhotosForCurrentIndex,
    };
}

export {usePhotoGallery}
