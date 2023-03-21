import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DependencyInjectionService } from './dependency-injection.service';

describe('DependencyInjectionService', () => {
  let service: DependencyInjectionService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
    .compileComponents();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DependencyInjectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
