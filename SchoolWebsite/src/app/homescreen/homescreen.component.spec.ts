import { ComponentFixture, TestBed } from '@angular/core/testing';

import { homescreenComponent } from './homescreen.component';

describe('homescreenComponent', () => {
  let component: homescreenComponent;
  let fixture: ComponentFixture<homescreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ homescreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(homescreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
