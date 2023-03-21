import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SpyOnService } from './spy-on.service';

describe('SpyOnService', () => {
  let service: SpyOnService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [SpyOnService],
      imports: [HttpClientModule]
    })
      .compileComponents();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpyOnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
