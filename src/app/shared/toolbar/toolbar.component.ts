import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

class Item {
  constructor(
    public name: string,
    public title: string,
    public icon: string
  ) {

  }
}
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.less']
})
export class ToolbarComponent implements OnInit {

  @Input() add = true;
  @Input() edit = true;
  @Input() delete = true;
  @Input() reference = true;
  @Input() audit = true;
  @Input() abnormal = true;
  @Input() multi = true;
  @Input() excel = true;
  @Input() annex = true;
  @Input() cancel = true;

  @Output() onemit = new EventEmitter<string>();
  items: Item[] = [];
  constructor() {
    // this.items.push(
    //   new Item('add', '创建', 'plus-square'),
    //   new Item('edit', '编辑', 'edit'),
    //   new Item('delete', '删除', 'delete'),
    //   new Item('reference', '参考创建', 'container'),
    //   new Item('audit', '审批', 'container'),
    //   new Item('abnormal', '异常处理', 'bug'),
    //   new Item('multi', '批量快速录入', 'folder-open'),
    //   new Item('excel', 'Excel批量导入', 'file-excel'),
    //   new Item('annex', '附件管理', 'paper-clip'),
    //   new Item('cancel', '取消已选', 'rollback')
    // );
  }

  ngOnInit() {
    if (this.add) {
      this.items.push(new Item('add', '创建', 'plus-square'));
    }
    if (this.edit) {
      this.items.push(new Item('edit', '编辑', 'edit'));
    }
    if (this.delete) {
      this.items.push(new Item('delete', '删除', 'delete'));
    }
    if (this.reference) {
      this.items.push(new Item('reference', '参考创建', 'container'));
    }
    if (this.audit) {
      this.items.push(new Item('audit', '审批', 'container'));
    }
    if (this.abnormal) {
      this.items.push(new Item('abnormal', '异常处理', 'bug'));
    }
    if (this.multi) {
      this.items.push(new Item('multi', '批量快速录入', 'folder-open'));
    }
    if (this.excel) {
      this.items.push(new Item('excel', 'Excel批量导入', 'file-excel'));
    }
    if (this.annex) {
      this.items.push(new Item('annex', '附件管理', 'paper-clip'));
    }
    if (this.cancel) {
      this.items.push(new Item('cancel', '取消已选', 'rollback'));
    }
  }

  emit(item: string) {
      this.onemit.emit(item);
  }

}
