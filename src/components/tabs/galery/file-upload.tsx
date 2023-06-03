import React, { useRef } from 'react';
import { Button, CircularProgress } from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { TypeUploadedFile } from '../../../helper/types';

interface IFileUploadProps {
    onFileUpload: (file: TypeUploadedFile) => void;
}

const FileUpload: React.FC<IFileUploadProps> = ({ onFileUpload }) => {
    const [uploading, setUploading] = React.useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileUpload = async (file: File) => {
        try {
            setUploading(true);

            // Simulating file upload delay
            await new Promise((resolve) => setTimeout(resolve, 2000));

            const uploadedFile: TypeUploadedFile = {
                url: URL.createObjectURL(file),
                filename: file.name,
                mimetype: file.type,
                size: file.size,
            };

            // Dispatch the uploaded file action to Redux
            onFileUpload(uploadedFile);
        } catch (error) {
            console.error('Error uploading file:', error);
        } finally {
            setUploading(false);
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const selectedFile = event.target.files[0];
            handleFileUpload(selectedFile);
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
                multiple={false} // Allow only single file selection
                ref={fileInputRef} // Assign the ref to the file input element
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
