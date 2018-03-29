import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverBoxComponent } from './discover-box.component';

describe('DiscoverBoxComponent', () => {
  let component: DiscoverBoxComponent;
  let fixture: ComponentFixture<DiscoverBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
