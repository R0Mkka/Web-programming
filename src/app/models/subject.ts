export interface ISubject {
  title: string;
  description?: string;
  link: string;
  accessName: string;
  courseNumber?: number;
}

export interface IScheduleItem {
  title: string;
  group: string;
  lectureRoom: string;
  isEmpty: boolean;
}

export interface IScheduleColumn {
  index: number;
  from: string;
  to: string;
  whiteWeekData: IScheduleItem[];
  greenWeekData: IScheduleItem[];
}
