import { waitForAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { FakeAsyncAsyncComponent } from './fake-async-async.component';

describe('FakeAsyncAsyncComponent', () => {
  let component: FakeAsyncAsyncComponent;
  let fixture: ComponentFixture<FakeAsyncAsyncComponent>;
  let h1: HTMLElement;
  let deb: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FakeAsyncAsyncComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeAsyncAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    deb = fixture.debugElement;

    h1 = fixture.nativeElement.querySelector('h1');
  });
  it("set studentName from component", waitForAsync(() => {

    component.studentName = 'dotnetoffice_updated';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const elemtnt: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#name');
      expect(elemtnt.value).toEqual('dotnetoffice_updated');

    })


  }));

  it("set studentName from component with fakeAsync", fakeAsync(() => {

    component.studentName = 'dotnetoffice_updated';
    fixture.detectChanges();

    tick();
    //fixture.whenStable().then(() => {
    const elemtnt: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#name');
    expect(elemtnt.value).toEqual('dotnetoffice_updated');

    // })


  }));
});
