import { Component } from '@angular/core';

@Component({
  selector: 'fees-app',
  templateUrl: 'fees.component.html',
  styleUrls: ['fees.component.scss']
})
export class FeesComponent {
  
  public bardata : number [][] = [
    [2],
    [8],
    [6],
    [2]
  ];
  
  lifematterdurations = [
    "Life of the matter",
    "Current Period",
    "Current Month",
    "Current Year"
  ];

}
