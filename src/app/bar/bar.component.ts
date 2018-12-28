import { Component,Input, OnInit } from '@angular/core';
import { NumberFormatOptions } from '@telerik/kendo-intl';

@Component({
  selector: 'bar-app',
  templateUrl: 'bar.component.html'
})
export class BarComponent implements OnInit {
  @Input()
  bardata: any;

barData:number [][] = [
  [2],
  [8],
  [6],
  [2]
];
  ngOnInit() {
    

    var t = [];
   var data =  this.bardata.split(",");

    for(var i = 0;i< data.length;i++) {
      
     var data2 =  (Array((data[i])));
     data2[0] = Number(data2[0])

      t.push ( data2)

    }
    this.barData = t;
    console.log(this.barData)

  }
  

}
