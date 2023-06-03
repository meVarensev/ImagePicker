import React, { useRef } from 'react';
import { Button, CircularProgress } from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { useDispatch } from 'react-redux';

import { TypeUploadedFile } from '../../../helper/types';
import {useAppDispatch} from "../../../hooks/redux-hooks";
import {addPhoto} from "../../../store/file-slice";

interface IFileUploadProps {
    // Удалите onFileUpload из пропсов, так как мы будем использовать Redux
}

const FileUpload: React.FC<IFileUploadProps> = () => {
    const [uploading, setUploading] = React.useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch()

    const handleFileUpload = async (files: File[]) => {
        try {
            setUploading(true);

            // Simulating file upload delay
           await new Promise((resolve) => setTimeout(resolve, 2000));

            const uploadedFiles: TypeUploadedFile[] = files.map((file) => ({
                url: URL.createObjectURL(file),
                filename: file.name,
                mimetype: file.type,
                size: file.size,
            }));

            dispatch(addPhoto(uploadedFiles));
        } catch (error) {
            console.error('Error uploading files:', error);
        } finally {
            setUploading(false);
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const selectedFiles = Array.from(event.target.files);
            handleFileUpload(selectedFiles);
        }
    };

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div>
            <input
                accept="image/*"
                style={{ display: 'none' }}
                id="file-upload"
                type="file"
                onChange={handleFileChange}
                multiple={true}
                ref={fileInputRef}
            />
            <label htmlFor="file-upload">
                <Button
                    disabled={uploading}
                    startIcon={uploading ? <CircularProgress size={20} /> : <DeleteForeverRoundedIcon />}
                    onClick={handleClick} // Trigger file selection
                    component="span"
                    sx={{
                        background: 'var(--btn-color-grey)',
                        color: 'black',
                        marginLeft: '15px',
                        '&:hover': {
                            backgroundColor: 'var(--btn-color-grey-hover)',
                        },
                    }}
                >
                    {uploading ? 'Загрузка...' : 'Выбрать'}
                </Button>
            </label>
        </div>
    );
};

export { FileUpload };
