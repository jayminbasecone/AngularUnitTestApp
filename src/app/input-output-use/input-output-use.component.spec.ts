import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputUseComponent } from './input-output-use.component';

describe('InputOutputUseComponent', () => {
  let component: InputOutputUseComponent;
  let fixture: ComponentFixture<InputOutputUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOutputUseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
