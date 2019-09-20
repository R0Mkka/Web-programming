import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IStudentReview } from '@models/review.models';
import { SERVER_URL, DBTables } from '@constants';

@Injectable({
  providedIn: 'root'
})
export class StudentReviewsService {
  constructor(
    private readonly http: HttpClient
  ) { }

  public getStudentReviewList(): Observable<IStudentReview[]> {
    return this.http.get<IStudentReview[]>(`${SERVER_URL}/${DBTables.StudentReviews}`);
  }

  public addStudentReview(review: IStudentReview): Observable<IStudentReview> {
    return this.http.post<IStudentReview>(`${SERVER_URL}/${DBTables.StudentReviews}`, review);
  }

  public deleteStudentReview(review: IStudentReview): Observable<IStudentReview> {
    return this.http.delete<IStudentReview>(`${SERVER_URL}/${DBTables.StudentReviews}/${review.id}`);
  }
}
