export class Subject {
  public accessLink: string;
  public defaultLink: string;

  constructor(
    public title: string,
    public description: string,
    public courseNumber: number,
  ) {
    this.accessLink = `subject-${Date.now().toString()}`;
    this.defaultLink = `${this.accessLink}/plan`;
  }
}
