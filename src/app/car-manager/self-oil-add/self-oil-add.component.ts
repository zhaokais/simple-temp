import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-self-oil-add',
  templateUrl: './self-oil-add.component.html',
  styleUrls: ['./self-oil-add.component.less']
})
export class SelfOilAddComponent implements OnInit {

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
      jssfzh: '',
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
      jssfzh: '',
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
      jssfzh: '',
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
      jssfzh: '',
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
      jssfzh: '',
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
      jssfzh: '',
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

  addDialog = false;
  validateForm: FormGroup;

  form_driver = true;
  form_number = true;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      ywdw: [null, [Validators.required]],
      jysj: [null, [Validators.required]],
      jzrq: ['2019-12-26', [Validators.required]],
      jyss: [null, [Validators.required]],
      yp: [null, [Validators.required]],
      shzt: [null, [Validators.required]],
      sfyscfj: [null, [Validators.required]],
      sjlx: [null, [Validators.required]],
      jyz: [null, [Validators.required]],
      jyclbh: [null, [Validators.required]],
      sjxm: [null, [Validators.required]],
      jssfzh: [null, [Validators.required]],
      jyzs: [1, [Validators.required]],
      jydj: [null, [Validators.required]],
      sfhsj: [null, [Validators.required]],
      sl: [null, [Validators.required]],
      hsje: [null],
      bhsje: [null, [Validators.required]],
      jyczr: [null, [Validators.required]],
      shsm: [null, [Validators.required]],
      shczr: [null, [Validators.required]],
      dcfkfs: [null, [Validators.required]],
      bz: [null, [Validators.required]]
    });
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

  checkAll() {
    this.listOfData.filter(item => item.shzt !== '102-审核通过').forEach(item => {
      item.isSelected = true;
    });
  }

  tool(event) {
    if (event === 'add') {
      this.addDialog = true;
    }
  }
  add() {
    this.addDialog = false;
  }
  cancel() {
    this.addDialog = false;
  }
}
