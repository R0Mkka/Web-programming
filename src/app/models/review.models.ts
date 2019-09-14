export enum StudentReviewFields {
  studentFullName = 'studentFullName',
  studentGroup = 'studentGroup',
  text = 'text',
  date = 'date'
}

export interface IStudentReview {
  studentFullName: string;
  studentGroup: string;
  text: string;
  date: Date;
}
