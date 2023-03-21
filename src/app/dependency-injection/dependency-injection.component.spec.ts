import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DependencyInjectionComponent } from './dependency-injection.component';
import { DependencyInjectionService } from './dependency-injection.service';

class MockDependencyInjectionService extends DependencyInjectionService {
  public NewSaveMethod() {
    return true;
  }
}

describe('DependencyInjectionComponent', () => {
  let component: DependencyInjectionComponent;
  let fixture: ComponentFixture<DependencyInjectionComponent>;
  let h1: HTMLElement;
  let deb: DebugElement;
  let service: DependencyInjectionService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependencyInjectionComponent ],
      providers: [DependencyInjectionService],
      imports: [HttpClientModule]
    })
    .compileComponents();
    TestBed.overrideComponent
    (
      DependencyInjectionComponent,
      { set: { providers: [{ provide: DependencyInjectionService, useClass: MockDependencyInjectionService }] } }
    )
    fixture = TestBed.createComponent(DependencyInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  
    deb = fixture.debugElement;

    h1 = fixture.nativeElement.querySelector('h1');

    service = TestBed.inject(DependencyInjectionService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('DI unit test case using testbed get method', () => {
    expect(service instanceof (DependencyInjectionService)).toBeTruthy();
  });
  
  it('DI unit test case with override', () => {
    let element = fixture.debugElement.injector.get(DependencyInjectionService);
    expect(element instanceof(MockDependencyInjectionService)).toBeTruthy();
  });
});
