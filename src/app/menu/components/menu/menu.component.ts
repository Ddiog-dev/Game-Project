import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SaveService} from "../../../services/save.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, private saveService: SaveService) { }

  ngOnInit(): void {
  }

  createGame(){
    this.saveService.resetGame();
    this.router.navigateByUrl('game');
  }

  joinGame(){
    this.router.navigateByUrl('game');
  }

}
