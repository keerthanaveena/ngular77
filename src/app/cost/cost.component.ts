import { Component } from '@angular/core';

@Component({
  selector: 'cost-app',
  templateUrl: 'cost.component.html',
  styleUrls:['cost.component.scss']
})
export class CostComponent {
   lifematterdurations = [
    "Life of the matter",
    "Current Period",
    "Current Month",
    "Current Year"
  ]

  public bardata : number [][] = [
    [2],
    [8],
    [6]
   
  ];

}
