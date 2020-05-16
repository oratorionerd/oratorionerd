import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvvisiComponent } from './avvisi.component';

describe('AvvisiComponent', () => {
  let component: AvvisiComponent;
  let fixture: ComponentFixture<AvvisiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvvisiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvvisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
