import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { NgForComponent } from './ng-for.component';
import { By } from '@angular/platform-browser';

describe('NgForComponent', () => {
  let component: NgForComponent;
  let fixture: ComponentFixture<NgForComponent>;
  let h1: HTMLElement;
  let deb: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    deb = fixture.debugElement;

    h1 = fixture.nativeElement.querySelector('h1');
  });
  
  it("ngFor1 simple array unit test", () => {
    const element: DebugElement[] = fixture.debugElement.queryAll(By.css('.ngFor1'));
   
    
    expect(element.length).toEqual(4);

    element.forEach((obj:DebugElement,index:number)=>{
      expect(obj.children[0].nativeElement.innerHTML.trim()).toEqual(component.ColorNames[index])
    })
  });

  
  it("ngFor1 simple array unit test - 1", () => {
    const element: DebugElement[] = fixture.debugElement.queryAll(By.css('.ngFor2'));
   
    
    expect(element.length).toEqual(4);

    element.forEach((obj:DebugElement,index:number)=>{
      expect(obj.children[0].nativeElement.innerHTML.trim()).toEqual(component.ColorsList[index].name + ' - ' +component.ColorsList[index].id)
    })
  });

  
  it("ngFor1 simple array unit test - 2", () => {
    const element: DebugElement[] = fixture.debugElement.queryAll(By.css('.ngFor3'));
   
    
    expect(element.length).toEqual(4);

    element.forEach((obj:DebugElement,index:number)=>{

      const output = `${index} - ${index ===0 ? true : false} - ${element.length-1 === index ? true : false} - ${index % 2 ===0} - ${index % 2 !== 0}`
      expect(obj.children[0].nativeElement.innerHTML.trim()).toEqual(output);
    })
  });
});
