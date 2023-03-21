import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionComponent } from './change-detection.component';

describe('ChangeDetectionComponent', () => {
  let component: ChangeDetectionComponent;
  let fixture: ComponentFixture<ChangeDetectionComponent>;
  let h1: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeDetectionComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector('h1');// get h1 tag
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Verify the h1 element value', () => {
    component.StudentSchoolResult();// change data
    fixture.detectChanges()// detect change data
    expect(h1.textContent).toBe(component.studentResult); // check data updated in html
  })

});
