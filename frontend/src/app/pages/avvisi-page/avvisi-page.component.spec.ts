import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AvvisiPageComponent } from './avvisi-page.component';

describe('AvvisiPageComponent', () => {
  let component: AvvisiPageComponent;
  let fixture: ComponentFixture<AvvisiPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvvisiPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvvisiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
