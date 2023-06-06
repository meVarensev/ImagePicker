import React, { Suspense, lazy } from 'react';
import { ButtonGroup } from './button-group';
import { useAppSelector } from '../../../hooks/redux-hooks';
import { TypeUploadedFile } from '../../../helper/types';
import { DefaultImg } from '../default-img';

const LazySectionImages = lazy(() => import('../section-images'));

const GaleryTab = () => {
    const files: TypeUploadedFile[] = useAppSelector((state) => state.files.filesGalery);

    const SectionImages = React.useMemo(() => {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <LazySectionImages files={files}  />
            </Suspense>
        );
    }, [files]);

    return (
        <div>
            <ButtonGroup />
            {!files.length && <DefaultImg />}
            {files.length > 0 && <div>{SectionImages}</div>}
        </div>
    );
};

export { GaleryTab };
