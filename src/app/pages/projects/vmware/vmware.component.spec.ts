import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmwareComponent } from './vmware.component';

describe('VmwareComponent', () => {
  let component: VmwareComponent;
  let fixture: ComponentFixture<VmwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VmwareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VmwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
