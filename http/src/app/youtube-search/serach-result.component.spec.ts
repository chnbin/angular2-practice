import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachResultComponent } from './serach-result.component';

describe('SerachResultComponent', () => {
  let component: SerachResultComponent;
  let fixture: ComponentFixture<SerachResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerachResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
