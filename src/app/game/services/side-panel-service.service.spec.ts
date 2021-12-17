import { TestBed } from '@angular/core/testing';

import { SidePanelServiceService } from './side-panel-service.service';

describe('SidePanelServiceService', () => {
  let service: SidePanelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidePanelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
