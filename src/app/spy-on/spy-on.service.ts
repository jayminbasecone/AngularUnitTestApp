import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SpyOnService {

  constructor(protected http: HttpClient) { }
  SaveDetails(info: { sumVal: number; name: string; }) {
    return this.http.post('https://localhost:4200', info);
  }
}
