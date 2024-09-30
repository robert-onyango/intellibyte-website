import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UssfComponent } from './ussf.component';

describe('UssfComponent', () => {
  let component: UssfComponent;
  let fixture: ComponentFixture<UssfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UssfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UssfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
