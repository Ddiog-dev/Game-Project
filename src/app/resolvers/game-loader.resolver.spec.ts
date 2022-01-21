import { TestBed } from '@angular/core/testing';

import { GameLoaderResolver } from './game-loader.resolver';

describe('GameLoaderResolver', () => {
  let resolver: GameLoaderResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GameLoaderResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
