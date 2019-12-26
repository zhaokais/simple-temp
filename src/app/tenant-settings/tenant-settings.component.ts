import { Component, OnInit } from '@angular/core';
import { UploadFile } from 'ng-zorro-antd';

@Component({
  selector: 'app-tenant-settings',
  templateUrl: './tenant-settings.component.html',
  styleUrls: ['./tenant-settings.component.less']
})
export class TenantSettingsComponent implements OnInit {

  title = '';

  showUploadList = {
    showPreviewIcon: true,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: true
  };
  fileList = [
    
  ];
  previewImage: string | undefined = '';
  previewVisible = false;

  show = true;

  noCarSettings = [
    {
      key: '电子录单名称:',
      value: '无车承运人电子路单'
    },
    {
      key: '资金流水单名称:',
      value: '资金流水单'
    },
    {
      key: '报文版本号:',
      value: '2015WCCYR'
    },
    {
      key: '发送方代码:',
      value: '20488'
    },
    {
      key: '接收方代码:',
      value: 'wcjc0001'
    },
    {
      key: '报文功能代码:',
      value: '9'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  }

  setShow(show) {
    this.show = show;
  }
}
