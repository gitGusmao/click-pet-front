import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourselSlideComponent } from './coursel-slide.component';

describe('CourselSlideComponent', () => {
  let component: CourselSlideComponent;
  let fixture: ComponentFixture<CourselSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourselSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourselSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
