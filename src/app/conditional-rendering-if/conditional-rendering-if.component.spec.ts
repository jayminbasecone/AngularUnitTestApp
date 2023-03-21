import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ConditionalRenderingIfComponent } from './conditional-rendering-if.component';

describe('ConditionalRenderingIfComponent', () => {
  let component: ConditionalRenderingIfComponent;
  let fixture: ComponentFixture<ConditionalRenderingIfComponent>;
  let h1: HTMLElement;
  let deb: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConditionalRenderingIfComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalRenderingIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    deb = fixture.debugElement;

    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("test case for num is greater than 20", () => {
    const element: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#div1');
    const element1: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#div2');

    expect(element).not.toBeNull();

    expect(element1).toBeNull();

  });

  it("test case for num is greater than 20 - ngTemplate", () => {

    component.num = 15;
    fixture.detectChanges();
    const element: HTMLHeadElement = fixture.debugElement.nativeElement.querySelector('#ng1');
    const element1: HTMLHeadElement = fixture.debugElement.nativeElement.querySelector('#ng2');

    expect(element).toBeNull();

    expect(element1).not.toBeNull();

  });

});
