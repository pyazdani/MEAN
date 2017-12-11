import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-power-levels',
  templateUrl: './power-levels.component.html',
  styleUrls: ['./power-levels.component.css']
})
export class PowerLevelsComponent implements OnInit {
  @Input() Power;

  constructor() { }

  ngOnInit() {
  }

}
