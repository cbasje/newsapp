import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = '92a76e8fcc914a48bbf9a18a2cb6bacc';

  constructor(private httpClient: HttpClient) { }

  getNews() {
    // return this.httpClient.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.API_KEY);
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?country=us&apiKey='+this.API_KEY);
  }
}
