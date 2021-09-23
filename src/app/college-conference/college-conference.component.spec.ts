import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeConferenceComponent } from './college-conference.component';

describe('CollegeConferenceComponent', () => {
  let component: CollegeConferenceComponent;
  let fixture: ComponentFixture<CollegeConferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegeConferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
