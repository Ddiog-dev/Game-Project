import { Component, OnInit } from '@angular/core';
import {Building} from "../../models/building";
import {BuildingService} from "../../services/building.service";

@Component({
  selector: 'app-economy-screen',
  templateUrl: './economy-screen.component.html',
  styleUrls: ['./economy-screen.component.scss']
})
export class EconomyScreenComponent implements OnInit {

  buildings: Building[]= [];

  columns: number = 0;

  constructor(private buildingService: BuildingService) { }

  ngOnInit(): void {
    this.buildings = this.buildingService.getBuildings();
    this.updateColumnsNumbers();
  }

  updateColumnsNumbers(){
    this.columns = Math.ceil(Math.sqrt(this.buildings.length));
  }
}
