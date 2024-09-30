import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NycdoeComponent } from './nycdoe.component';

describe('NycdoeComponent', () => {
  let component: NycdoeComponent;
  let fixture: ComponentFixture<NycdoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NycdoeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NycdoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
