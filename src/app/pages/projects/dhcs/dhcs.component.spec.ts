import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DhcsComponent } from './dhcs.component';

describe('DhcsComponent', () => {
  let component: DhcsComponent;
  let fixture: ComponentFixture<DhcsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DhcsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DhcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
