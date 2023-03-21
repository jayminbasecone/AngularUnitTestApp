import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ReactiveFormComponent } from './reactive-form.component';

describe('ReactiveFormComponent', () => {
  let component: ReactiveFormComponent;
  let fixture: ComponentFixture<ReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormComponent ],
      imports:[ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Reactive form validation - FirstName check', () => {
    let firstName = component.registerForm.controls['firstName'];
    expect(firstName.valid).toBeFalsy();
    expect(firstName.errors!['required']).toBeTruthy();
  });

  it('Reactive form validation -set FirstName check', () => {
    let firstName = component.registerForm.controls['firstName'];
    firstName.setValue('firstName');

    expect(firstName.valid).toBeTruthy();
    expect(firstName.value).toEqual('firstName');
  });

  it('Reactive form validation -set Email check', () => {
    let firstName = component.registerForm.controls['email'];
    firstName.setValue('emailAddress');

    expect(firstName.valid).toBeFalsy();
    expect(firstName.value).toEqual('emailAddress');
  });

  
  it('Reactive form validation -check valid Email address check', () => {
    let firstName = component.registerForm.controls['email'];
    firstName.setValue('dotnetoffice16@gmail.com');

    expect(firstName.valid).toBeTruthy();
    expect(firstName.value).toEqual('dotnetoffice16@gmail.com');
  });

  it('Reactive form validation - form submitted check', () => {
    expect(component.registerForm.invalid).toBeTruthy();

    let btn = fixture.debugElement.query(By.css('input[type=submit'));

    component.registerForm.controls['title'].setValue('mr');
    component.registerForm.controls['firstName'].setValue('FirstName');
    component.registerForm.controls['lastName'].setValue('LastName');
    component.registerForm.controls['email'].setValue('dotnetoffice16@gmail.com');
    component.registerForm.controls['password'].setValue('123456');
    component.registerForm.controls['confirmPassword'].setValue('123456');

  component.onSubmit();
  fixture.detectChanges();
  expect(component.submittedMsg).toEqual('SUCCESS!! :-)\n\n' + JSON.stringify(component.registerForm.value, null, 4));
  });
});
