export interface ISubject {
  title: string;
  description?: string;
  link: string;
  accessName: string;
  courseNumber?: number;
}

export interface IScheduleSubject {
  title: string;
  group: string;
  lectureRoom: string;
}
