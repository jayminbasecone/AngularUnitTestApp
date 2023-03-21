import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FileSizePipe } from '../pipes/file-size.pipe';

import { PipeUseComponent } from './pipe-use.component';

let upperPipe: UpperCasePipe;
let lowerPipe: LowerCasePipe;
let pipe: FileSizePipe;
describe('PipeUseComponent', () => {
  let component: PipeUseComponent;
  let fixture: ComponentFixture<PipeUseComponent>;
  let h1: HTMLElement;
  let deb: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipeUseComponent,FileSizePipe]
    })
      .compileComponents();
    fixture = TestBed.createComponent(PipeUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    deb = fixture.debugElement;

    h1 = fixture.nativeElement.querySelector('h1');
    upperPipe = new UpperCasePipe();
    lowerPipe = new LowerCasePipe();
    pipe = new FileSizePipe();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Unit test case for Upper Pipe', () => {
    expect(lowerPipe.transform(component.title)).toEqual("the dotnet office");
  });

  it('Unit test case for file size Pipe', () => {
    expect(pipe.transform(component.size)).toEqual("File size is -1.91MB");
  });
});
