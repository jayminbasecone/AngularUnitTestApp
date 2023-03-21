import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../app-routing.module';

import { TestBedFixtureComponent } from './test-bed-fixture.component';

describe('TestBedFixtureComponent', () => {
  let component: TestBedFixtureComponent;
  let fixture: ComponentFixture<TestBedFixtureComponent>;// it allow as to use component, html, etc.

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestBedFixtureComponent ],
      providers:[],
      imports:[AppRoutingModule]
    })
    .compileComponents();
  });// it compile all required imports declaration and providers

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBedFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
