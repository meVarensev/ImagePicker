import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {GaleryTab} from "./galery-tab/galery-tab";
import {TabPanel} from "../ui/tab-panel/tab-panel";
import {TemplateTab} from "./template-tab/template-tab";
import {itemDataTemplateTab} from "../../helper/item-data-template-tab";
import {ItemDataBackgroundTab} from "../../helper/item-data-background-tab";

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const BasicTabs = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' , display: "flex" ,  justifyContent: "space-around" }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Гаререя" {...a11yProps(0)}  />
                    <Tab label="Шаблоны" {...a11yProps(1)} />
                    <Tab label="Фон" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}  >
                <GaleryTab/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <TemplateTab itemData={itemDataTemplateTab}/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <TemplateTab itemData={ItemDataBackgroundTab}/>
            </TabPanel>
        </Box>
    );
}
