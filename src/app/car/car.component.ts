import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  data = [
      {'id': 'FI-SW-01', 'number': 'Koi', 'weight': 10.00, 'speed': 'P'},
      {'id': 'FI-SW-02', 'number': 'sdi', 'weight': 10.00, 'speed': 'P'},
      {'id': 'FI-SW-03', 'number': 'asg', 'weight': 10.00, 'speed': 'P'},
      {'id': 'FI-SW-04', 'number': 'Koi', 'weight': 10.00, 'speed': 'P'},
      {'id': 'FI-SW-05', 'number': 'Ksd', 'weight': 10.00, 'speed': 'P'},
      {'id': 'FI-SW-06', 'number': 'wgd', 'weight': 10.00, 'speed': 'P'},
      {'id': 'FI-SW-07', 'number': 'Koi', 'weight': 10.00, 'speed': 'P'},
  ];

  field = [
    {
      key: 'Item ID',
      value: 'id'
    },
    {
      key: 'Number',
      value: 'number'
    },
    {
      key: 'Weight',
      value: 'weight'
    },
    {
      key: 'Speed',
      value: 'speed'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
