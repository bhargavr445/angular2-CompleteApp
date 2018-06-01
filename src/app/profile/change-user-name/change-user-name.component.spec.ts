import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeUserNameComponent } from './change-user-name.component';

describe('ChangeUserNameComponent', () => {
  let component: ChangeUserNameComponent;
  let fixture: ComponentFixture<ChangeUserNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeUserNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeUserNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
