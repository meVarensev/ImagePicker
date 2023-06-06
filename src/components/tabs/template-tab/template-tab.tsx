import React, { useMemo } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

interface ITemplateTabValue {
    img: string;
    title: string;
}

interface ITemplateTabProps {
    itemData: ITemplateTabValue[];
}

const TemplateTab: React.FC<ITemplateTabProps> = ({ itemData }) => {
    const memoizedImageListItems = useMemo(
        () =>
            itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            )),
        [itemData]
    );

    return (
        <ImageList sx={{ height: 520 }} cols={3} gap={8}>
            {memoizedImageListItems}
        </ImageList>
    );
};

export { TemplateTab };
