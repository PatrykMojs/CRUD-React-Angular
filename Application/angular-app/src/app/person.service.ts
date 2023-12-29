import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService{

  private apiUrl = 'http://localhost:5147'

  constructor(private http: HttpClient) { }

  getPeople() :Observable<any>{
    return this.http.get(`${this.apiUrl}/GetPeople`);
  }

  addPerson(person: any) :Observable<any>{
    return this.http.post(`${this.apiUrl}/PersonAdd`, person);
  }

  updatePerson(id: number, person: any): Observable<any>{
    return this.http.put(`${this.apiUrl}/PersonUpdate/${id}`, person);
  }

  deletePerson(id: number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/PersonDelete/${id}`);
  } 
}
