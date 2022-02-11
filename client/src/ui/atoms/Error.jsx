import { Box, Typography } from '@mui/material';
import UnknownError from 'assets/unknown_error.png'

export const Error = ({ error }) => {

  const text = "Wystąpił nieoczekiwany błąd"

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        }} 
      >
      <img alt="error picture" src={UnknownError} height={248}  weight={248}/>
      {
        error?.message?.includes('Network Error') ? (
          <Typography>Uruchom Server!</Typography>
        ) : <Typography variant={'paragraph'}>{text}</Typography> //  TODO in TASK 1
      }
     
    </Box>
  );
};
