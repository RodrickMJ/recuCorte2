import React from 'react'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';


function SearchInput() {
  return (
    <>
    
    <TextField 
    sx={{
      
    }}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      )
    }}
    
    id="outlined-basic" placeholder='Buscar en campusLink' variant="outlined" />
    
    </>
  )
}



export default SearchInput

