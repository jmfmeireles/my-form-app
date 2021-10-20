import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';

export const PageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: ${StyleConstants.NAV_BAR_HEIGHT};
  margin: auto;
  padding: 10px 20px;
`;

export const TableWrapper = styled.div`
  width: 50% !important;
  @media (max-width: 900px) {
    width: 100% !important;
  }
`;
