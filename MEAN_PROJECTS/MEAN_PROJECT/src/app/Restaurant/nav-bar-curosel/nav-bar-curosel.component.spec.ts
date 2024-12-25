import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarCuroselComponent } from './nav-bar-curosel.component';

describe('NavBarCuroselComponent', () => {
  let component: NavBarCuroselComponent;
  let fixture: ComponentFixture<NavBarCuroselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarCuroselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarCuroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
