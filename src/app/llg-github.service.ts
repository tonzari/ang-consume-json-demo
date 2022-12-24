import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { GameInfo } from './game-info';

@Injectable({
  providedIn: 'root'
})
export class LlgGithubService {

  constructor(private http: HttpClient) { }

  // Pretty straight forward! Just remember:
  // - the get() method can retrieve data (lke json)
  // - and then give it back to you in particular type (that you supply like this: get<MyObject[]>('url'); )

  // Essentially, this get<T>() says "please transform whatever data you get back from the url into an array of GameInfo please!"
  
  getGames() {
    return this.http.get<GameInfo[]>('https://raw.githubusercontent.com/tonzari/LLG_SteamgroupScrape/main/games.json'); 
  }
}
