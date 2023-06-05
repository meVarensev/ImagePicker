import React from 'react';
import {ButtonGroup} from "./button-group";
import {useAppSelector} from '../../../hooks/redux-hooks';
import {TypeUploadedFile} from "../../../helper/types";
import {DefaultImg} from "../default-img";
import {SectionImages} from "../section-images";


const GaleryTab = () => {
    const files: TypeUploadedFile[] = useAppSelector((state) => state.files.filesGalery)

    return (
        <div>
            <ButtonGroup/>
            {!files.length && <DefaultImg/>}
            {files.length > 0 && <SectionImages files={files}/>}
        </div>

    )
};

export {GaleryTab};
