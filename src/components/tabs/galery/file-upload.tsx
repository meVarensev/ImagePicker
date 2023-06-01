import React, {ChangeEvent, useState} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const FileUpload: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        handleFiles(event.target.files);
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        handleFiles(event.dataTransfer.files);
    };

    const handleFiles = (fileList: FileList | null) => {
        if (fileList && fileList.length > 0) {
            const selectedFile = fileList[0];
            if (selectedFile.type.startsWith('image/')) {
                setSelectedImage(selectedFile);
            } else {
                console.log('Invalid file type. Please select an image file.');
            }
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <>
            <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                style={{
                    width: 200,
                    height: 125,
                    padding: 10,
                    border: '1px dashed grey',
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <input
                    type="file"
                    accept="image/*" // Only allow image files
                    onChange={handleFileChange}
                    style={{display: 'none'}}
                    id="file-upload-input"
                />
                <label htmlFor="file-upload-input">
                    <Button variant="text" component="span" sx={{textAlign: "center"}}>
                        Добавить фотографию
                    </Button>
                </label>
            </div>
            {selectedImage && (
                <Box sx={{mt: 2}}>
                    <img src={URL.createObjectURL(selectedImage)} alt="Selected Image"/>
                </Box>
            )}
        </>
    );
};

export {FileUpload};
