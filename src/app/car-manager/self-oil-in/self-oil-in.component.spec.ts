/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SelfOilInComponent } from './self-oil-in.component';

describe('SelfOilInComponent', () => {
  let component: SelfOilInComponent;
  let fixture: ComponentFixture<SelfOilInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfOilInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfOilInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
