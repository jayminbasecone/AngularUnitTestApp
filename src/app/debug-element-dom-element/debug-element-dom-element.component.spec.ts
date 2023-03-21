import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DebugElementDomElementComponent } from './debug-element-dom-element.component';

describe('DebugElementDomElementComponent', () => {
  let component: DebugElementDomElementComponent;
  let fixture: ComponentFixture<DebugElementDomElementComponent>;
  let deb : DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebugElementDomElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugElementDomElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    deb = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('increase count click', () => {
     
    const h1 = deb.query(By.css('h1'));
    const btn = deb.query(By.css('#btnIncreaseNumber'));

    btn.triggerEventHandler('click', {});
    fixture.detectChanges();

    expect(component.countNumber).toEqual(parseInt( h1.nativeElement.innerText));

  });
});
