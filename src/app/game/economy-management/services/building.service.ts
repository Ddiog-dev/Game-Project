import { Injectable } from '@angular/core';
import {Building} from "../models/building";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BuildingService {


  forum!: Building;

  constructor(private http: HttpClient) {
    this.http.get<Building>("assets/buildings/forum.json").subscribe((data: Building) =>{
      console.log(data);
      this.forum = data
    })

  }

   getBuildings(): Building[] {
    return [this.forum]
  }
}
