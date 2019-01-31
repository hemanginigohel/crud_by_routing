import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginparamComponent } from './loginparam.component';

describe('LoginparamComponent', () => {
  let component: LoginparamComponent;
  let fixture: ComponentFixture<LoginparamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginparamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginparamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
