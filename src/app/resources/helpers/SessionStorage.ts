import { PersonData } from '../../types';

const PERSON_DATA_ENTRIES = 'personDataEntries';

export default class SessionStorage {
  static getStoredEntries(): PersonData[] {
    const stringifiedPersonDataEntries: string | null =
      sessionStorage.getItem(PERSON_DATA_ENTRIES);
    return stringifiedPersonDataEntries
      ? JSON.parse(stringifiedPersonDataEntries)
      : [];
  }

  static addNewEntry(newPersonDataEntry: PersonData) {
    const personDataEntries: PersonData[] = SessionStorage.getStoredEntries();
    personDataEntries.unshift(newPersonDataEntry);
    sessionStorage.setItem(
      PERSON_DATA_ENTRIES,
      JSON.stringify(personDataEntries),
    );
  }
}
