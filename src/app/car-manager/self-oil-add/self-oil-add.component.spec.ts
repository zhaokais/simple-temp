/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SelfOilAddComponent } from './self-oil-add.component';

describe('SelfOilAddComponent', () => {
  let component: SelfOilAddComponent;
  let fixture: ComponentFixture<SelfOilAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfOilAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfOilAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
