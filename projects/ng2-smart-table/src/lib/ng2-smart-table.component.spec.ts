import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2SmartTableComponent } from './ng2-smart-table.component';

describe('Ng2SmartTableComponent', () => {
  let component: Ng2SmartTableComponent;
  let fixture: ComponentFixture<Ng2SmartTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2SmartTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2SmartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
