import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  power = {
    num: null,
  };

  human;
  saiyan;
  supersaiyan;
  supersaiyan2;
  supersaiyan3;
  supersaiyan4;
  counter = [];

  Count(num) {
    for (let i = 1; i <= num; i++) {
      this.counter.push(i);
    }
    return this;
  }
  constructor() { }

  ngOnInit() {
    this.Count(100);
  }


  onSubmit(myForm) {
    this.human = this.power.num;
    this.saiyan = this.power.num * 10;
    this.supersaiyan = this.power.num * 90;
    this.supersaiyan2 = this.power.num * 150;
    this.supersaiyan3 = this.power.num * 250;
    this.supersaiyan4 = this.power.num * 500;
    this.power = {
      num: null,
    };
  }

}
