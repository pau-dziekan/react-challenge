import { Box, Typography } from '@mui/material';
import NoContentPicture from 'assets/no_content.png'

export const NoContent = () => {

  const text = 'Brak danych do wyświetlenia'

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        }} 
      >
      <img alt="no content picture" src={NoContentPicture} height={248}  weight={248}/>
      {
        <Typography variant={'paragraph'}>{text}</Typography> //  TODO in TASK 1
      }
     
    </Box>
  );
};
