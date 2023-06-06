import React, { useRef, useCallback, useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { TypeUploadedFile } from '../../../helper/types';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { addPhoto } from '../../../store/file-slice';

const FileUpload = () => {
    const [uploading, setUploading] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const handleFileUpload = useCallback(async (files: File[]) => {
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
    }, [dispatch]);

    const handleFileChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            if (event.target.files && event.target.files.length > 0) {
                const selectedFiles = Array.from(event.target.files);
                handleFileUpload(selectedFiles);
            }
        },
        [handleFileUpload]
    );

    const handleClick = useCallback(() => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }, []);

    const fileInputRef = useRef<HTMLInputElement>(null);

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
            <Button
                disabled={uploading}
                startIcon={uploading ? <CircularProgress size={20} /> : <DeleteForeverRoundedIcon />}
                onClick={handleClick}
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
        </div>
    );
};

export { FileUpload };
