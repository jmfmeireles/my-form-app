import { PersonData } from 'app/types';
import i18next from 'i18next';

export default class AgeHelper {
  static getGreetingsMessage(personData: PersonData): string {
    if (personData.birthdate) {
      const age: number = AgeHelper.getCurrentAge(personData.birthdate);
      const isTodayPersonBirthdate: boolean =
        AgeHelper.checkIfTodayIsTheBirthdate(personData.birthdate);
      return i18next.t(
        isTodayPersonBirthdate
          ? 'formPage.greetingsWithHappyBirthday'
          : 'formPage.greetingsNextBirthday',
        {
          name: `${personData.name} ${personData.surname}`,
          country: personData.country,
          birthdateDay: personData.birthdate.getDate(),
          birthdateMonth: AgeHelper.getMonthString(
            personData.birthdate.getMonth(),
          ),
          age: isTodayPersonBirthdate ? age : age + 1,
        },
      );
    } else {
      return `${i18next.t('formPage.greetings')}!`;
    }
  }
  static checkIfTodayIsTheBirthdate(birthdate: Date): boolean {
    const today: Date = new Date();
    return (
      today.getDate() === birthdate.getDate() &&
      today.getMonth() === birthdate.getMonth()
    );
  }
  static getCurrentAge(birthdate: Date): number {
    var ageDifMs = Date.now() - birthdate.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  static getMonthString(month: number): string {
    const months = [
      i18next.t('formPage.january'),
      i18next.t('formPage.february'),
      i18next.t('formPage.march'),
      i18next.t('formPage.april'),
      i18next.t('formPage.may'),
      i18next.t('formPage.june'),
      i18next.t('formPage.july'),
      i18next.t('formPage.august'),
      i18next.t('formPage.september'),
      i18next.t('formPage.october'),
      i18next.t('formPage.november'),
      i18next.t('formPage.december'),
    ];
    return months[month];
  }
}
