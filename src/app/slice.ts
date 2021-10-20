import { PayloadAction } from 'typesafe-actions';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { FormDataState, PersonData } from './types';
import SessionStorage from './resources/helpers/SessionStorage';

export const initialState: FormDataState = {
  personRecords: [],
};

const formSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    addPerson(state: FormDataState, action: PayloadAction<string, PersonData>) {
      state.personRecords.unshift(action.payload);
      SessionStorage.addNewEntry(action.payload);
    },
    getRecordsFromSessionStorage(state: FormDataState) {
      state.personRecords = SessionStorage.getStoredEntries();
    },
  },
});

export const { actions, reducer, name: sliceKey } = formSlice;
