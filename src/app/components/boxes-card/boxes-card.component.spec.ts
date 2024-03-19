import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxesCardComponent } from './boxes-card.component';

describe('BoxesCardComponent', () => {
  let component: BoxesCardComponent;
  let fixture: ComponentFixture<BoxesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxesCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
