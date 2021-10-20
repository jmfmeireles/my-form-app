import {
  TableContainer as MUITableContainer,
  TableCell as MUITablCell,
} from '@mui/material';
import styled from 'styled-components/macro';

export const TableContainer = styled(MUITableContainer)`
  width: 100%;
  padding: 0px 15px !important;
`;

export const TableCellHead = styled(MUITablCell)`
  font-weight: bold !important;
`;

export const NoDataWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 5px;
`;
