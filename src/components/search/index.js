import { Close, Search } from '@mui/icons-material';
import { IconButton, Slide } from '@mui/material';
import React, { useContext } from 'react'
import { UiContext } from '../../context/ui';
import { SearchBoxContainer, SearchField } from '../../styles/search';

const SearchBox = () => {

    const { showSearchBox, setShowSearchBox } = useContext(UiContext);

  return (
    <Slide direction='down' in={showSearchBox}>
        <SearchBoxContainer>
            <SearchField color='secondary' variant='standard' fullWidth placeholder='search...'></SearchField>
            <IconButton><Search sx={{ fontSize: { xs: '2rem', md: '3rem' } }} color='secondary'></Search></IconButton>
            <IconButton onClick={() => { setShowSearchBox(false); }} sx={{ position: 'absolute', top: 10, right: 10 }}><Close sx={{ fontSize: '4rem' }} color='secondary'></Close></IconButton>
        </SearchBoxContainer>
    </Slide>
  )
}

export default SearchBox;