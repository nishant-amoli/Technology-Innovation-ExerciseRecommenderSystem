import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdvertisementComponent } from './admin-advertisement.component';

describe('AdminAdvertisementComponent', () => {
  let component: AdminAdvertisementComponent;
  let fixture: ComponentFixture<AdminAdvertisementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAdvertisementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
