import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-self-oil-in',
  templateUrl: './self-oil-in.component.html',
  styleUrls: ['./self-oil-in.component.less']
})
export class SelfOilInComponent implements OnInit {

  date = '';
  carNumber = '';
  state = '';
  unit = '';
  more = false;
  nodes = [
    {
      title: '贺泰汽运',
      key: '100',
      children: [
        {
          title: '公司管理',
          key: '1001',
          isLeaf: true
        },
        {
          title: '财务部',
          key: '1002',
          isLeaf: true
        },
        {
          title: '经营部',
          key: '1003',
          children: [
            {title: '西召调度组', key: '10031', isLeaf: true },
            {title: '西营子调度组', key: '10032', isLeaf: true },
            {title: '杭锦旗调度组', key: '10033', isLeaf: true },
            {title: '大路调度组', key: '10034', isLeaf: true }
          ]
        },
        {
          title: '行政部',
          key: '1004',
          isLeaf: true
        },
        {
          title: '加油站',
          key: '1005',
          children: [
            {title: '涌金石油', key: '10051', isLeaf: true },
            {title: '力田加油站', key: '10052', isLeaf: true }
          ]
        }
      ]
    },
    {
      title: '贺泰联创',
      key: '200',
      children: [
        {
          title: '公司管理',
          key: '2001',
          isLeaf: true
        },
        {
          title: '财务部',
          key: '2002',
          isLeaf: true
        },
        {
          title: '经营部',
          key: '2003',
          children: [
            {title: '西召调度组', key: '20031', isLeaf: true },
            {title: '西营子调度组', key: '20032', isLeaf: true },
            {title: '杭锦旗调度组', key: '20033', isLeaf: true },
            {title: '大路调度组', key: '20034', isLeaf: true }
          ]
        },
        {
          title: '行政部',
          key: '2004',
          isLeaf: true
        },
        {
          title: '加油站',
          key: '2005',
          isLeaf: true
        }
      ]
    }
  ];

  listOfData = [
    {
      id: 1,
      ywdw: '贺泰汽运',
      jysj: '2019-05-30T18:29:50',
      jzrq: '2019-05-30',
      jyss: '4090.81',
      yp: '0#柴油',
      shzt: '102-审核通过',
      sfyscfj: '未上传',
      sjlx: '手工创建',
      jyz: '力田加油站',
      jyclbh: 'DL620',
      sjxm: '史慧第',
      sjsfzh: '',
      jyzs: '1',
      jydj: '6',
      sfhsj: '否',
      sl: '0',
      hsje: '1762.14',
      bhsje: '1762.14',
      jyczr: '',
      shsm: '',
      shczr: 'admin',
      dcfkfs: '运费抵扣',
      bz: '',
      isSelected: false
    },
    {
      id: 2,
      ywdw: '贺泰汽运',
      jysj: '2019-05-30T18:29:50',
      jzrq: '2019-05-30',
      jyss: '4090.81',
      yp: '0#柴油',
      shzt: '102-审核通过',
      sfyscfj: '未上传',
      sjlx: '手工创建',
      jyz: '力田加油站',
      jyclbh: 'DL620',
      sjxm: '史慧第',
      sjsfzh: '',
      jyzs: '1',
      jydj: '6',
      sfhsj: '否',
      sl: '0',
      hsje: '1762.14',
      bhsje: '1762.14',
      jyczr: '',
      shsm: '',
      shczr: 'admin',
      dcfkfs: '运费抵扣',
      bz: '',
      isSelected: false
    },
    {
      id: 3,
      ywdw: '贺泰汽运',
      jysj: '2019-05-30T18:29:50',
      jzrq: '2019-05-30',
      jyss: '4090.81',
      yp: '0#柴油',
      shzt: '102-审核通过',
      sfyscfj: '未上传',
      sjlx: '手工创建',
      jyz: '力田加油站',
      jyclbh: 'DL620',
      sjxm: '史慧第',
      sjsfzh: '',
      jyzs: '1',
      jydj: '6',
      sfhsj: '否',
      sl: '0',
      hsje: '1762.14',
      bhsje: '1762.14',
      jyczr: '',
      shsm: '',
      shczr: 'admin',
      dcfkfs: '运费抵扣',
      bz: '',
      isSelected: false
    },
    {
      id: 4,
      ywdw: '贺泰汽运',
      jysj: '2019-05-30T18:29:50',
      jzrq: '2019-05-30',
      jyss: '4090.81',
      yp: '0#柴油',
      shzt: '102-审核通过',
      sfyscfj: '未上传',
      sjlx: '手工创建',
      jyz: '力田加油站',
      jyclbh: 'DL620',
      sjxm: '史慧第',
      sjsfzh: '',
      jyzs: '1',
      jydj: '6',
      sfhsj: '否',
      sl: '0',
      hsje: '1762.14',
      bhsje: '1762.14',
      jyczr: '',
      shsm: '',
      shczr: 'admin',
      dcfkfs: '运费抵扣',
      bz: '',
      isSelected: false
    },
    {
      id: 5,
      ywdw: '贺泰汽运',
      jysj: '2019-05-30T18:29:50',
      jzrq: '2019-05-30',
      jyss: '4090.81',
      yp: '0#柴油',
      shzt: '102-审核通过',
      sfyscfj: '未上传',
      sjlx: '手工创建',
      jyz: '力田加油站',
      jyclbh: 'DL620',
      sjxm: '史慧第',
      sjsfzh: '',
      jyzs: '1',
      jydj: '6',
      sfhsj: '否',
      sl: '0',
      hsje: '1762.14',
      bhsje: '1762.14',
      jyczr: '',
      shsm: '',
      shczr: 'admin',
      dcfkfs: '运费抵扣',
      bz: '',
      isSelected: false
    },
    {
      id: 6,
      ywdw: '贺泰汽运',
      jysj: '2019-05-30T18:29:50',
      jzrq: '2019-05-30',
      jyss: '4090.81',
      yp: '0#柴油',
      shzt: '102-审核通过',
      sfyscfj: '未上传',
      sjlx: '手工创建',
      jyz: '力田加油站',
      jyclbh: 'DL620',
      sjxm: '史慧第',
      sjsfzh: '',
      jyzs: '1',
      jydj: '6',
      sfhsj: '否',
      sl: '0',
      hsje: '1762.14',
      bhsje: '1762.14',
      jyczr: '',
      shsm: '',
      shczr: 'admin',
      dcfkfs: '运费抵扣',
      bz: '',
      isSelected: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }
  searchUnit(item) {
    alert(item);
  }

  searchDate(item) {
    alert(item);
  }

  showMore() {
    this.more = !this.more;
  }
  getTitle() {
    return this.more ? '收起' : '更多';
  }


  tool(event) {
    if (event === 'add') {
    }
  }
  add() {
  }
  cancel() {
  }

  editItem(item) {
    item.isSelected = !item.isSelected;
  }
  focusNextInput(event, data) {
    if (event.keyCode === 13) {
      this.listOfData[this.listOfData.indexOf(data)].isSelected = !this.listOfData[this.listOfData.indexOf(data)].isSelected;
      if (this.listOfData.indexOf(data) + 1 <= this.listOfData.length) {
        this.listOfData[this.listOfData.indexOf(data) + 1].isSelected = !this.listOfData[this.listOfData.indexOf(data)].isSelected;
      }
      setTimeout(() => {
        const input = document.getElementById(this.listOfData[this.listOfData.indexOf(data) + 1].id + '');
        input.focus();
      }, 10);
    }
  }
}
