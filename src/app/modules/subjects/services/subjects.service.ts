import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_URL, DBTables } from '@constants';
import { Subject } from '../components/new-subject-dialog/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  constructor(
    private readonly http: HttpClient,
  ) {}

  public getSubjectList(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${SERVER_URL}/${DBTables.Subjects}`);
  }

  public addSubject(subject: Subject): Observable<Subject> {
    return this.http.post<Subject>(
      `${SERVER_URL}/${DBTables.Subjects}`,
      JSON.stringify(subject),
      {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
        })
      }
    );
  }
}
