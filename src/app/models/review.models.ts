export enum StudentReviewFields {
  id = 'id',
  studentFullName = 'studentFullName',
  studentGroup = 'studentGroup',
  text = 'text',
  date = 'date'
}

export interface IStudentReview {
  id: string;
  studentFullName: string;
  studentGroup: string;
  text: string;
  date: Date;
}
