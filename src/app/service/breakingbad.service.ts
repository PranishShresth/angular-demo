import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode } from '../interface/episode';
@Injectable({
  providedIn: 'root',
})
export class BreakingbadService {
  constructor(private http: HttpClient) {}

  getEpisodes() {
    return this.http.get<Episode[]>(
      'https://www.breakingbadapi.com/api/episodes'
    );
  }
}
