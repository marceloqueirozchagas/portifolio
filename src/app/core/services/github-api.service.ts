import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  constructor(private http: HttpClient) {}

  getGithubRepos(): Observable<any> {
    return this.http.get(
      'https://api.github.com/users/marceloqueirozchagas/repos'
    );
  }
}
