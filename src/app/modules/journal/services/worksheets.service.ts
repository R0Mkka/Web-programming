import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IWorksheet } from '@models/worksheet.models';
import { SERVER_URL, DBTables } from '@constants';

const headers: HttpHeaders = new HttpHeaders({
  'Content-type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class WorksheetsService {
  constructor(
    private readonly http: HttpClient
  ) { }

  public getWorksheets(folderId: string): Observable<IWorksheet[]> {
    return this.http.get<IWorksheet[]>(`${SERVER_URL}/${DBTables.Worksheets}?folderId=${folderId}`, { headers });
  }

  public getWorksheetById(worksheetId: string): Observable<IWorksheet> {
    return this.http.get<IWorksheet>(`${SERVER_URL}/${DBTables.Worksheets}/${worksheetId}`, { headers });
  }

  public addWorksheet(worksheet: IWorksheet): Observable<IWorksheet> {
    return this.http.post<IWorksheet>(`${SERVER_URL}/${DBTables.Worksheets}`, JSON.stringify(worksheet), { headers });
  }

  public editWorksheet(worksheet: IWorksheet): Observable<IWorksheet> {
    return this.http.patch<IWorksheet>(`${SERVER_URL}/${DBTables.Worksheets}/${worksheet.id}`, worksheet);
  }
}
