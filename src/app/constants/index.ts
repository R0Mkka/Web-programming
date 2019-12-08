export const SERVER_URL = 'http://localhost:3000';

export enum DBTables {
  Schedule = 'schedule',
  Folders = 'folders',
  Worksheets = 'worksheets',
  StudentReviews = 'student-reviews',
  Subjects = 'subjects',
}

export enum ApplicationSections {
  Subjects = 'Дисциплины',
  Schedule = 'Расписание',
  Journal = 'Журнал',
  Supervision = 'Кураторство',
  StudentReviews = 'Отзывы студентов',
  Help = 'Помощь'
}

export enum LocalStorageItems {
  Subjects = 'Subjects',
  Schedule = 'Schedule',
  StudentReviews = 'StudentReviews',
  Folders = 'Folders'
}

export enum FieldTypes {
  Text = 'text',
  Number = 'number',
  File = 'file'
}

export enum Keyboard {
  Enter = 'Enter',
  Space = 'Space',
  Esc = 'Escape',
  Tab = 'Tab',
  ArrowUp = 'ArrowUp',
  ArrowDown = 'ArrowDown',
  ArrowLeft = 'ArrowLeft',
  ArrowRight = 'ArrowRight'
}
