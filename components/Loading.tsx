import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

const StyledContainer = styled.div`
    height: 100vh;
    display: grid;
    place-items: center;
`

const Loading = () => {
  return (
    <StyledContainer>
        <CircularProgress />
    </StyledContainer>
  )
}

export default Loading