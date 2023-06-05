import React from 'react';
import {ButtonGroup} from "./button-group";
import {useAppSelector} from '../../../hooks/redux-hooks';
import {TypeUploadedFile} from "../../../helper/types";
import {DefaultImg} from "../default-img";
import {SectionImages} from "../section-images";
import {usePhotoGallery} from "../../../hooks/use-photo-gallery";

const GaleryTab = () => {
    const files: TypeUploadedFile[] = useAppSelector((state) => state.files.filesGalery)
    const imgSliceValue = 8

    const {
        currentIndex,
        goToNextPhoto,
        goToPreviousPhoto,
        getPhotosForCurrentIndex,
    } = usePhotoGallery(files , imgSliceValue)

    const imgList = getPhotosForCurrentIndex()

    return (
        <div>
            <ButtonGroup/>
            {!files.length && <DefaultImg/>}
            {files.length > 0 && <SectionImages files={imgList} goToNextPhoto={goToNextPhoto}/>}
        </div>

    )
};

export {GaleryTab};
