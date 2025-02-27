import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogPopupComponent } from './dog-popup.component';

describe('DogPopupComponent', () => {
  let component: DogPopupComponent;
  let fixture: ComponentFixture<DogPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
