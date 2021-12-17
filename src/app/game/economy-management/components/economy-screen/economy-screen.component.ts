import { Component, OnInit } from '@angular/core';
import {Building} from "../../models/building";
import {BuildingTier} from "../../models/building-tier";

@Component({
  selector: 'app-economy-screen',
  templateUrl: './economy-screen.component.html',
  styleUrls: ['./economy-screen.component.scss']
})
export class EconomyScreenComponent implements OnInit {

  buildings: Building[]= [];

  columns: number = 0;

  constructor() { }

  ngOnInit(): void {
    const building: Building  = {description: "desc", income: 0, name: "test building", nextTiers: [], tier: {} as BuildingTier};
    this.buildings = [building, building, building,building];
    this.columns = 2;
  }

}
