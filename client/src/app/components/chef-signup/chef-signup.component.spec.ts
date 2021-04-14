import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefSignupComponent } from './chef-signup.component';

describe('ChefSignupComponent', () => {
  let component: ChefSignupComponent;
  let fixture: ComponentFixture<ChefSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
