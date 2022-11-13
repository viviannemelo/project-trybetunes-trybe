import { Box, Paper, styled } from '@mui/material';

export const CustomForm = styled('form')`
  display: flex;
  width: 100vw;
  height: 100vh
  flex-direction: column";
  align-items: center;
`;

export const CustomPaper = styled(Paper)`
  display: flex;
  width: 20rem;
  height: 10rem;
  flex-direction: column;
  padding: 5rem;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 15px;
`;

export const CustomBox = styled(Box)`
  display: flex;
  margin-top: 15%;
`;
