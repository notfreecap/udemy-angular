import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutHttpComponent } from './donut-http.component';

describe('DonutHttpComponent', () => {
  let component: DonutHttpComponent;
  let fixture: ComponentFixture<DonutHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonutHttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonutHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
