import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';
import { User } from './user';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private userUrl = 'https://ycb1sb6t8e.execute-api.us-west-2.amazonaws.com/default/LeadStorw'; // Replace with your API URL
  constructor(private http: HttpClient) { }

  // Function to submit the form data
  formSubmit(user: User): Observable<any> {
    return this.http.post<any>(this.userUrl, user, httpOptions).pipe(
      tap((response) => console.log('Form submitted successfully:', response)), // Success logging
      catchError(this.handleError<any>('formSubmit', {})) // Error handling
    );
  }

  // Error handling
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error('Error:', error);
      console.log(`${operation} failed: ${error.message}`);
      return (error);
    };
  }

}
