import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NgxPlatformModule } from './ngx-if-platform.module';
import { NgxPlatformService } from './ngx-if-platform.service';

describe('NgxPlatformService', () => {
  describe('browser', () => {
    let service: NgxPlatformService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [NgxPlatformModule],
        providers: [
          { provide: PLATFORM_ID, useValue: 'browser' }
        ]
      });
      service = TestBed.inject(NgxPlatformService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should return correct variables', () => {
      expect(service.isBrowser).toBe(true);
      expect(service.isServer).toBe(false);
      expect(service.isWorkerApp).toBe(false);
      expect(service.isWorkerUi).toBe(false);
    });
  });

  describe('server', () => {
    let service: NgxPlatformService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [NgxPlatformModule],
        providers: [
          { provide: PLATFORM_ID, useValue: 'server' }
        ]
      });
      service = TestBed.inject(NgxPlatformService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should return correct variables', () => {
      expect(service.isBrowser).toBe(false);
      expect(service.isServer).toBe(true);
      expect(service.isWorkerApp).toBe(false);
      expect(service.isWorkerUi).toBe(false);
    });
  });

  describe('workerApp', () => {
    let service: NgxPlatformService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [NgxPlatformModule],
        providers: [
          { provide: PLATFORM_ID, useValue: 'browserWorkerApp' }
        ]
      });
      service = TestBed.inject(NgxPlatformService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should return correct variables', () => {
      expect(service.isBrowser).toBe(false);
      expect(service.isServer).toBe(false);
      expect(service.isWorkerApp).toBe(true);
      expect(service.isWorkerUi).toBe(false);
    });
  });

  describe('workerUi', () => {
    let service: NgxPlatformService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [NgxPlatformModule],
        providers: [
          { provide: PLATFORM_ID, useValue: 'browserWorkerUi' }
        ]
      });
      service = TestBed.inject(NgxPlatformService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should return correct variables', () => {
      expect(service.isBrowser).toBe(false);
      expect(service.isServer).toBe(false);
      expect(service.isWorkerApp).toBe(false);
      expect(service.isWorkerUi).toBe(true);
    });
  });
});
