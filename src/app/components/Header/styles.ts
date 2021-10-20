import styled from 'styled-components/macro';
import { Chip } from '@mui/material';

import { StyleConstants } from 'styles/StyleConstants';

export const Wrapper = styled.header`
  box-shadow: 0 1px 0 0 ${p => p.theme.borderLight};
  height: ${StyleConstants.NAV_BAR_HEIGHT};
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 10px;
  background-color: ${p => p.theme.header};
  justify-content: space-between;
  z-index: 2;
  @supports (backdrop-filter: blur(10px)) {
    backdrop-filter: blur(10px);
    background-color: ${p =>
      p.theme.header.replace(
        /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
        'rgba$1,0.75)',
      )};
  }
`;

export const AppNameAndDescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    display: inline-block;
  }
`;

export const Title = styled.div`
  font-size: 1.25rem;
  color: ${p => p.theme.text};
  font-weight: bold;
  margin-right: 0.5rem;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const Description = styled.div`
  font-size: 0.75rem;
  color: ${p => p.theme.textSecondary};
  font-weight: normal;
  @media (max-width: 500px) {
    font-size: 0.5rem;
  }
`;

export const LanguagesWrapper = styled.nav`
  display: flex;
`;

export const LanguageOption = styled(Chip)`
  margin: auto 5px !important;
  @media (max-width: 500px) {
    .MuiChip-label {
      font-size: 0.5rem !important;
    }
  }
`;
