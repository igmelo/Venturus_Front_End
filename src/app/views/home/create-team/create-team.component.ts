import {COMMA, ENTER, F} from '@angular/cdk/keycodes';
import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';
import { Player } from 'src/app/model/player_model';
import { Tags } from 'src/app/model/tags';
import { Team } from 'src/app/model/teams';
import { SearchService } from 'src/app/search/search.service';
import { TeamServiceService } from 'src/app/team-service.service';


@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {
  
  player_id: number;
  team: Team;

  constructor(private search: SearchService){}


  ngOnInit(): void {
    
    this.search.searchPlayers().subscribe((res: any) => {
      this.players = res;
      console.log(this.players);
  
    });

  }
  firstName: any;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  players: Player[] = [];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  
  tags: Tags[] = [];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tags: Tags): void {
    const index = this.tags.indexOf(tags);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
  Search(){
    if(this.firstName == ""){
      this.ngOnInit();
    }else{
        this.players = this.players.filter(res =>{
          return res.player_name.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
        })
      }
  }
}
