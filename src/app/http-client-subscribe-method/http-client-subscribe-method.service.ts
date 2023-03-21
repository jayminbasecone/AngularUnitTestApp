import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpClientSubscribeMethodService {

  jsonUrl = "https://jsonplaceholder.typicode.com/";
  constructor(
    protected http: HttpClient
  ) { }

  SaveDetails(info: { sumVal: number; name: string; }) {
    return this.http.post('https://localhost:4200', info);
  }

  public getListOfData()
  {
    return this.http.get(this.jsonUrl + 'posts');
  }

  public PostListOfData(post:any)
  {
    const headers = new HttpHeaders();
    return this.http.post(this.jsonUrl + 'posts',post,{headers});
  }
}
