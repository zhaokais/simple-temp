import { Component, OnInit } from '@angular/core';

class Filter {
  constructor(
    public code,
    public name: string,
    public unitcost,
    public status,
    public listprice,
    public attr,
  ) {

  }
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data = [
      {'code': 'FI-SW-01', 'name': 'Koi', 'unitcost': 10.00, 'status': 'P', 'listprice': 36.50, 'attr': 'Large', 'itemid': 'EST-1'}
  ];
  data_back;

  merge = 'name';
  field = [
    {
      key: 'Item ID',
      value: 'code'
    },
    {
      key: 'Name',
      value: 'name'
    },
    {
      key: 'Unitcost',
      value: 'unitcost'
    },
    {
      key: 'status',
      value: 'status'
    },
    {
      key: 'listprice',
      value: 'listprice'
    },
    {
      key: 'attr',
      value: 'attr'
    },
    {
      key: 'itemid',
      value: 'itemid'
    }
  ];

  public filter: Filter;
  constructor() {
    this.filter = new Filter('', '', '', '', '', '');
    this.data_back = this.data;
  }

  ngOnInit() {
  }

  search() {
    if (this.filter.name) {
      const temp = [];
      this.data.forEach(
        item => {
          if (item.name === this.filter.name) {
            temp.push(item);
          }
        }
      );
      this.data = temp;
    } else {
      this.data = this.data_back;
    }
  }

}
