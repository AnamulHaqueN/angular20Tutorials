import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  courseName: string = 'angular 20 tutorial';
  productPrice: number = 12500

  maxlength: number = 5;
  minChar: number = 3;

  inputType: string =  "checkbox";

  myClassName: string = "myColor";

  // event binding
  showWelcomeMessage() {
    alert("Welcome to Angular 20");
  }

  changeCourseName() {
    this.courseName = "React Tutorials";
  }

  onChange() {
    alert('City are changed');
  }
}
