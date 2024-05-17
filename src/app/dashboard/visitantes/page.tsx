/* eslint-disable eslint-comments/require-description */
/* eslint-disable eslint-comments/require-description */
/* eslint-disable eslint-comments/require-description */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
// tabs
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


import Paper from '@mui/material/Paper';

// icons
import PersonPinIcon from '@mui/icons-material/PersonPin';
import DialpadIcon from '@mui/icons-material/Dialpad';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import GroupsIcon from '@mui/icons-material/Groups';
import ReduceCapacityIcon from '@mui/icons-material/ReduceCapacity';

// components
import Geral from '@/components/dashboard/visitantes/geral/geral';



export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (

    <Paper elevation={3} >
    <Box sx={{ width: '90%', typography: 'body1', margin: 2 }}>
       
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange}   aria-label="lab API tabs example" sx={{ marginLeft: 45}}>
            <Tab icon={<DialpadIcon />}    iconPosition="start" label="Geral"  value="1"  sx={{marginRight: 5}}/>
            <Tab  icon={<HomeRepairServiceIcon />}    iconPosition="start" label="Prestadores de Serviço" value="2" />
            <Tab  icon={<GroupsIcon />}    iconPosition="start" label="Visitantes Regulares" value="3" />
            <Tab icon={<ReduceCapacityIcon />}    iconPosition="start" label="Convidados" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Geral/>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
     
    </Box>
    </Paper>
  );
}