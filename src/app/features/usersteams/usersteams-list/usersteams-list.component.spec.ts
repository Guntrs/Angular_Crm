import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersteamsListComponent } from './usersteams-list.component';

describe('UsersteamsListComponent', () => {
  let component: UsersteamsListComponent;
  let fixture: ComponentFixture<UsersteamsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersteamsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersteamsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
