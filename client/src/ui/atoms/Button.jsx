import * as React from 'react';
import { Button as MuiButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddIcon from '@mui/icons-material/Add';


export function Button({ children, startIcon, endIcon, ...props }) {
    return <MuiButton {...props} disableRipple
    startIcon={startIcon && <AddIcon />} endIcon={endIcon && <ArrowForwardIosIcon /> }
    onClick={()=> console.log('Kliknięto przycisk')}
   >{children}</MuiButton>;
}


