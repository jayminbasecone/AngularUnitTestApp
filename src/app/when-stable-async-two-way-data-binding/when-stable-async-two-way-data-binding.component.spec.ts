import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { WhenStableAsyncTwoWayDataBindingComponent } from './when-stable-async-two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
describe('WhenStableAsyncTwoWayDataBindingComponent', () => {
  let component: WhenStableAsyncTwoWayDataBindingComponent;
  let fixture: ComponentFixture<WhenStableAsyncTwoWayDataBindingComponent>;
  let h1: HTMLElement;
  let deb: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhenStableAsyncTwoWayDataBindingComponent ],
      imports:[AppRoutingModule, HttpClientModule, FormsModule]
    })
    .compileComponents();
    fixture = TestBed.createComponent(WhenStableAsyncTwoWayDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    deb = fixture.debugElement;
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it("set studentName from component", (done) => {

    component.myName = 'dotnetoffice_updated';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const elemtnt: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#name');
      expect(elemtnt.value).toEqual('dotnetoffice_updated');
      done();
    })

  });

  it("set textbox  value", (done) => {

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const elemtnt: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#name');

      elemtnt.value = "textbox updated";
      elemtnt.dispatchEvent(new Event('input'));
      expect(elemtnt.value).toEqual(component.myName);
      done();
    });
  });

    it("button click test case", (done) => {

      fixture.detectChanges();
      const elemtnt: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#button1');
      

      fixture.whenStable().then(() => {
        elemtnt.click();
        expect(component.myName).toEqual("DotNet office");
        fixture.detectChanges();
        fixture.whenStable().then(()=>{
          const elemtnt: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#name');
          expect(elemtnt.value).toEqual("DotNet office");
        })
       done();
      });

  });
});
