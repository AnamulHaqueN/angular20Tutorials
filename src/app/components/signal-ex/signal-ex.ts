import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css'
})
export class SignalEx {
  firstName: string = "Anamul";
  productName = "Moto";

  courseName = signal<string>("Angular 20");

  courseDuration = signal("15 Vidieos");

  courseDetail = computed(()=>this.courseName() + '-' + this.courseDuration())

  constructor() {
    this.firstName = "Rahul Kumar";
    console.log(this.firstName);
    console.log(this.courseName)
    setTimeout(()=>{
      this.courseName.set("React Tutorials");
    }, 5000);

    console.log(this.courseName())
  }
}
