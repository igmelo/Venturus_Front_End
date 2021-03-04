import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Player } from 'src/app/model/player_model';
import { SearchService } from 'src/app/search/search.service';
import { OrderPipe } from 'ngx-order-pipe';
import { TooltipPosition } from '@angular/material/tooltip';
import { FormControl } from '@angular/forms';
import { Team } from 'src/app/model/teams';
import { TeamServiceService } from 'src/app/team-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  name: string;
  players: Player[] = [];
  teams: Team[];
  constructor(private search: SearchService, private teamService: TeamServiceService) { }

  ngAfterViewInit() {
    this.search.searchPlayers().subscribe((res: any) => {
      this.players = res;
      console.log(this.players)
    });
    
  
    
  }
  key = "id";
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  rowIndex: any;
  i: any;
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[1]);

  
}