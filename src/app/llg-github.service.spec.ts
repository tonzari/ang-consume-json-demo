import { TestBed } from '@angular/core/testing';

import { LlgGithubService } from './llg-github.service';

describe('LlgGithubService', () => {
  let service: LlgGithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LlgGithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
