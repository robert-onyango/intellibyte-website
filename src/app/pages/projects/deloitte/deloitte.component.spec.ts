import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeloitteComponent } from './deloitte.component';

describe('DeloitteComponent', () => {
  let component: DeloitteComponent;
  let fixture: ComponentFixture<DeloitteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeloitteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeloitteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
