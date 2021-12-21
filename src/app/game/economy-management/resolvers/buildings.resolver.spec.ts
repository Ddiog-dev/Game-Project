import { TestBed } from '@angular/core/testing';

import { BuildingsResolver } from './buildings.resolver';

describe('BuildingsResolver', () => {
  let resolver: BuildingsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(BuildingsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
