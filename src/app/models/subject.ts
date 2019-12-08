export interface ISubject {
  id: any;
  title: string;
  description?: string;
  link: string;
  courseNumber?: number;
}

export interface IScheduleItem {
  isEmpty: boolean;
  title?: string;
  group?: string;
  lectureRoom?: string;
}

export interface IScheduleColumn {
  id: number;
  from: string;
  to: string;
  whiteWeekData: IScheduleItem[];
  greenWeekData: IScheduleItem[];
}
