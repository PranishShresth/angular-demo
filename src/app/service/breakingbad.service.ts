import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BreakingbadService {
  constructor(private http: HttpClient) {}

  getEpisodes() {
    return this.http.get('https://www.breakingbadapi.com/api/episodes');
  }
}
