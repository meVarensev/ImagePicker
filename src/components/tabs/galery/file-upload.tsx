import React, {useState} from 'react';
import {Button, CircularProgress} from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import {TypeUploadedFile} from '../../../helper/types';
import Box from '@mui/material/Box';

interface IFileUploadProps {
    onFileUpload: (file: TypeUploadedFile) => void;
}

const FileUpload: React.FC<IFileUploadProps> = ({onFileUpload}) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState<boolean>(false);

    const handleFileUpload = async () => {
        if (selectedFile !== null) {
            try {
                setUploading(true);

                // Simulating file upload delay
                await new Promise((resolve) => setTimeout(resolve, 2000));

                const uploadedFile: TypeUploadedFile = {
                    url: URL.createObjectURL(selectedFile),
                    filename: selectedFile.name,
                    mimetype: selectedFile.type,
                    size: selectedFile.size,
                };

                // Pass the uploaded file data to the parent component
                onFileUpload(uploadedFile);
            } catch (error) {
                console.error('Error uploading file:', error);
            } finally {
                setUploading(false);
            }
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(() => event.target.files[0]);
        }
    };

    return (
        <div>
            <input
                accept="image/*"
                style={{display: 'none'}}
                id="file-upload"
                type="file"
                onChange={handleFileChange}
                multiple={false} // Allow only single file selection
            />
            <label htmlFor="file-upload">
                <Button
                    disabled={uploading}
                    startIcon={uploading ? <CircularProgress size={20}/> : <DeleteForeverRoundedIcon/>}
                    onClick={handleFileUpload}
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

export {FileUpload};
