import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  baseUrl: string = 'http://localhost:3000';
  endpoint: string = '/add';

  constructor(private http: HttpClient) {}

  add<T>(body: Team) {
    return this.http.post<T>(`${this.baseUrl}${this.endpoint}`, body);
  }
  get<T>() {
    return this.http.get<T>(`${this.baseUrl}`); 
  }
}