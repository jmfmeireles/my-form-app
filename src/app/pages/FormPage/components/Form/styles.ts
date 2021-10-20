import { FormGroup } from '@mui/material';
import styled from 'styled-components/macro';

export const FormWrapper = styled(FormGroup)`
  width: 50%;
  > div {
    width: 100%;
    margin: 5px;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  * {
    margin: 5px !important;
  }
  @media (max-width: 500px) {
    width: 100%;
    justify-content: space-between;
  }
`;
