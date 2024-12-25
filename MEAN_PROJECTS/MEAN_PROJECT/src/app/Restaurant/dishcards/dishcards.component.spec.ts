import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishcardsComponent } from './dishcards.component';

describe('DishcardsComponent', () => {
  let component: DishcardsComponent;
  let fixture: ComponentFixture<DishcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DishcardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
