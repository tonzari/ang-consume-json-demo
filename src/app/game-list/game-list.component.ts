import { Component, OnInit } from '@angular/core';
import { GameInfo } from '../game-info';
import { LlgGithubService } from '../llg-github.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})

export class GameListComponent implements OnInit {

  gameList: GameInfo[] = [];
  displayedColumns: string[] = ['imageUrl', 'title', 'description', 'releaseDate', 'storeUrl' ];

  constructor(private llgGithubService: LlgGithubService) { } // the constructor is mainly used for injection. here we inject the service.

  // we access getGames() from the service. 
  // we subscribe because getGames uses 'HttpClient' to make the get request, and HttpClient uses rsjx.
  // rsjx makes use of Observables and the get method returns an observable.
  // What's an Observable? 
  // -- An Observable is a stream of data that we can subscribe to.

  // in the service, we've instructed get method to return an observable of type GameInfo[]. See the llg-github-service file to see the syntax.

  ngOnInit(): void {
    this.llgGithubService.getGames()
      .subscribe(
        {
          next: (games) =>  this.gameList = games,
          error: (err) => { console.log(err) }    
        }
      );  
  }

}
