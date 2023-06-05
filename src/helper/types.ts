export interface TypeUploadedFile   {
    url: string;
    filename: string;
    mimetype: string;
    size: number;
}

export interface IPropsModalValue {
    severity: 'error' | 'success' | 'info' | 'warning';
    alertTitle: string
    text: string
    strongText: string
}
