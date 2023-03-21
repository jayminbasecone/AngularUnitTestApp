import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DependencyInjectionService {
  constructor(protected http: HttpClient) { }

  SaveDetails(info: { sumVal: number; name: string; }) {
    return this.http.post('https://localhost:4200', info);
  }
}
