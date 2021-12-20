import {Component, Input, OnInit} from '@angular/core';
import {Building} from "../../models/building";

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent implements OnInit {

  @Input()
  building!: Building;

  @Input()
  sidePanelView: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
