import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitorTrackerService {

  private apiUrl = 'https://8bk38b70lk.execute-api.ap-south-1.amazonaws.com/default/ip_tracker';
  constructor(private http: HttpClient) { }

  logVisitor(projectName: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = {
      project_name: projectName,
      timestamp: new Date().toISOString()
    };
    return this.http.post(this.apiUrl, body, { headers });
  }
}
