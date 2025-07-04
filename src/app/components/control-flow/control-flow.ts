import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export class ControlFlow {
    simplePara: boolean = false;

    startMonth: string = 'feb';

    cityList: string[] = ["Pune", "Mumbai", "Panjab", "Guahati"];
    
    studentList: any[] = [
      {name: 'Anu', city: 'Narsingdi', isActive: false},
      {name: 'Bnu', city: 'Noakhali', isActive: false},
      {name: 'Cnu', city: 'Puakhali', isActive: true},
      {name: 'Dnu', city: 'Guakhali', isActive: false}
    ]

    showPara() {
      this.simplePara = true;
    } 
    hidePara() {
      this.simplePara = false;
    }
}
