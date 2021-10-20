export interface PersonData {
  name: string;
  surname: string;
  birthdate: Date | null;
  country: string;
}

export interface FormDataState {
  personRecords: PersonData[];
}
