import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomyScreenComponent } from './economy-screen.component';

describe('EconomyScreenComponent', () => {
  let component: EconomyScreenComponent;
  let fixture: ComponentFixture<EconomyScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EconomyScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomyScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
