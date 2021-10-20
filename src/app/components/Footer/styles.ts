import styled from 'styled-components/macro';

import { StyleConstants } from 'styles/StyleConstants';

export const Wrapper = styled.div`
  height: ${StyleConstants.NAV_BAR_HEIGHT};
  background-color: ${p => p.theme.footer};
  color: ${p => p.theme.primary};
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  > p {
    padding: 10px;
  }
`;
