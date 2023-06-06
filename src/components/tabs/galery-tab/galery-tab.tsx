import React, {Suspense, lazy, useState} from 'react';
import { ButtonGroup } from './button-group';
import { useAppSelector } from '../../../hooks/redux-hooks';
import { TypeUploadedFile } from '../../../helper/types';
import { DefaultImg } from '../default-img';
import {ShowInfo} from "../../modal/show-info";
import {modalValueWarningInfo} from "../../../helper/modal-value";
import {useNavigate} from "react-router-dom";

const LazySectionImages = lazy(() => import('../section-images'));

const GaleryTab = () => {
    const files: TypeUploadedFile[] = useAppSelector((state) => state.files.filesGalery);
    const [vueError, setVueError] = useState(false)
    const navigate = useNavigate();
    const navigateAllPhoto = () => {
        if (!files.length) {
            setVueError(true)
            return null
        }
        navigate('/allPhoto');
    }


    const SectionImages = React.useMemo(() => {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <LazySectionImages files={files}  />
            </Suspense>
        );
    }, [files]);

    return (
        <div>
            <ButtonGroup navigateAllPhoto={navigateAllPhoto} />
            {(vueError && !files.length)  && <ShowInfo props={modalValueWarningInfo}/>}
            {!files.length && <DefaultImg />}
            {files.length > 0 && <div>{SectionImages}</div>}
        </div>
    );
};

export { GaleryTab };
