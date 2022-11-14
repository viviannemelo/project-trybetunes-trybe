import { Box, Link, styled } from '@mui/material';

export const CustomBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 150px; 
  width: 80%;
  margin: auto;
  position: relative;
  top: 20px;
`;

export const CustomLink = styled(Link)`
  color: black;
  font-family: Arial;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const CustomProfileLink = styled(Link)`
  display: flex;
  margin: auto;
  
  font-family: Arial;
  font-size: 20px;
  font-weight: 600;
  color: black;
`;
