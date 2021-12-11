import React from 'react'
import Box from '@mui/material/Box';

export default function TaskBox(props) {
    return (
        <div>
            <Box
            display="flex" 
            justifyContent="center" 
            alignItems="center"
            color="white"
            
      sx={{
        borderRadius: 10,  
        width: 300,
        height: 150,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
          justifyContent:"center",
          boxShadow: 6,
        },
      }}
    >
     {props.text}   
    </Box>
        </div>
    )
}
