import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.formData || initialState;

export const getPersonRecords = createSelector(
  [selectDomain],
  stateWithPersonRecords => stateWithPersonRecords.personRecords,
);
