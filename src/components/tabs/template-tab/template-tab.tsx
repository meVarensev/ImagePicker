import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

interface ITemplateTabValue{
    img: string
    title: string
}
interface ITemplateTabProps {
    itemData: ITemplateTabValue[]
}
const  TemplateTab: React.FC<ITemplateTabProps> = ({itemData}) =>  {
    return (
        <ImageList sx={{ height: 520 }} cols={3} gap={8}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

export {TemplateTab}

