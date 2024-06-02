import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NgxIfPlatformModule } from './ngx-if-platform.module';
import { NgxIfPlatformService } from './ngx-if-platform.service';

describe('NgxIfPlatformService', () => {
  describe('browser', () => {
    let service: NgxIfPlatformService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [NgxIfPlatformModule],
        providers: [{ provide: PLATFORM_ID, useValue: 'browser' }]
      });
      service = TestBed.inject(NgxIfPlatformService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should return correct variables', () => {
      expect(service.isBrowser).toBe(true);
      expect(service.isServer).toBe(false);
    });
  });

  describe('server', () => {
    let service: NgxIfPlatformService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [NgxIfPlatformModule],
        providers: [{ provide: PLATFORM_ID, useValue: 'server' }]
      });
      service = TestBed.inject(NgxIfPlatformService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should return correct variables', () => {
      expect(service.isBrowser).toBe(false);
      expect(service.isServer).toBe(true);
    });
  });
});
