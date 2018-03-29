import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantBoxComponent } from './restaurant-box.component';

describe('RestaurantBoxComponent', () => {
  let component: RestaurantBoxComponent;
  let fixture: ComponentFixture<RestaurantBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
