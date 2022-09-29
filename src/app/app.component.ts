import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Title';

  count = 0;
  number1 = 0;
  number2 = 0;
  result = 0;
  listOfNumbers = [23,1,811,9,34];
  listOfNames = ["abs","xyz","ihd"];
  increment = () => {
    this.count++;
  }
  decrement = () => {
    this.count--;
  }
  Addition = () => {
    this.(result) = this.(number1) + this.(number2);
  }
}
