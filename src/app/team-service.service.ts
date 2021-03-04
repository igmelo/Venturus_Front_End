import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Team } from './model/teams';

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {

  constructor(private storage: LocalStorageService) { }

  saveTeam(team: Team) {
      this.storage.set(team.id, team);

  }
  getTeam(id:string): Team{
    return this.storage.get(id);
  }

  getAll(): Team[]{
    return this.storage.keys().map(id => this.getTeam(id));
  }
}
