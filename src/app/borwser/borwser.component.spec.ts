import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorwserComponent } from './borwser.component';

describe('BorwserComponent', () => {
  let component: BorwserComponent;
  let fixture: ComponentFixture<BorwserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorwserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorwserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
