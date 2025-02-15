/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, PLATFORM_ID, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxIfBrowserDirective } from './ngx-if-browser.directive';
import { NgxIfPlatformModule } from './ngx-if-platform.module';
import { NgxIfPlatformService } from './ngx-if-platform.service';

describe('NgxIfBrowserDirective', () => {
  describe('inline style', () => {
    @Component({
      template: ` <div *ngxIfBrowser>Is browser</div> `,
      imports: [NgxIfBrowserDirective]
    })
    class TestDirectiveComponent {
      @ViewChild(NgxIfBrowserDirective) public directive?: NgxIfBrowserDirective;
    }

    let fixture: ComponentFixture<TestDirectiveComponent>;
    let templateRef: jest.Mocked<TemplateRef<any>>;
    let viewContainer: jest.Mocked<ViewContainerRef>;
    let platformService: jest.Mocked<NgxIfPlatformService>;

    beforeEach(() => {
      templateRef = {
        elementRef: jest.fn(),
        createEmbeddedView: jest.fn()
      } as unknown as jest.Mocked<TemplateRef<any>>;

      viewContainer = {
        length: jest.fn(),
        remove: jest.fn(),
        createEmbeddedView: jest.fn(),
        createComponent: jest.fn()
      } as unknown as jest.Mocked<ViewContainerRef>;

      platformService = {
        isServer: jest.fn(),
        isBrowser: jest.fn()
      } as unknown as jest.Mocked<NgxIfPlatformService>;

      fixture = TestBed.configureTestingModule({
        imports: [NgxIfPlatformModule, TestDirectiveComponent],
        providers: [
          { provide: TemplateRef, useValue: templateRef },
          { provide: ViewContainerRef, useValue: viewContainer },
          { provide: NgxIfPlatformService, useValue: platformService },
          { provide: PLATFORM_ID, useValue: 'browser' }
        ]
      }).createComponent(TestDirectiveComponent);

      fixture.detectChanges();
    });

    it('should create an instance', () => {
      const directive = new NgxIfBrowserDirective(templateRef, viewContainer, platformService);
      expect(directive).toBeTruthy();
    });
  });

  describe('template style', () => {
    @Component({
      template: `
        <ng-template [ngxIfBrowser]="enabled" [ngxIfNotBrowser]="notBrowser">Is browser</ng-template>
        <ng-template #notBrowser>Is not browser</ng-template>
      `,
      imports: [NgxIfBrowserDirective]
    })
    class TestDirectiveComponent {
      @ViewChild(NgxIfBrowserDirective) public directive?: NgxIfBrowserDirective;
      public enabled = true;
    }

    let fixture: ComponentFixture<TestDirectiveComponent>;
    let templateRef: jest.Mocked<TemplateRef<any>>;
    let viewContainer: jest.Mocked<ViewContainerRef>;
    let platformService: jest.Mocked<NgxIfPlatformService>;

    beforeEach(() => {
      templateRef = {
        elementRef: jest.fn(),
        createEmbeddedView: jest.fn()
      } as unknown as jest.Mocked<TemplateRef<any>>;

      viewContainer = {
        length: jest.fn(),
        remove: jest.fn(),
        createEmbeddedView: jest.fn(),
        createComponent: jest.fn()
      } as unknown as jest.Mocked<ViewContainerRef>;

      platformService = {
        isServer: jest.fn(),
        isBrowser: jest.fn()
      } as unknown as jest.Mocked<NgxIfPlatformService>;

      fixture = TestBed.configureTestingModule({
        imports: [NgxIfPlatformModule, TestDirectiveComponent],
        providers: [
          { provide: TemplateRef, useValue: templateRef },
          { provide: ViewContainerRef, useValue: viewContainer },
          { provide: NgxIfPlatformService, useValue: platformService },
          { provide: PLATFORM_ID, useValue: 'browser' }
        ]
      }).createComponent(TestDirectiveComponent);

      fixture.detectChanges();
    });

    it('should create an instance', () => {
      const directive = new NgxIfBrowserDirective(templateRef, viewContainer, platformService);
      expect(directive).toBeTruthy();
    });

    it('should create an disabled instance', () => {
      const component = fixture.componentInstance;
      component.enabled = false;
      fixture.detectChanges();
      const directive = new NgxIfBrowserDirective(templateRef, viewContainer, platformService);
      expect(directive).toBeTruthy();
    });
  });

  describe('template style which do not match', () => {
    @Component({
      template: `
        <ng-template [ngxIfBrowser]="enabled" [ngxIfNotBrowser]="notBrowser">Is browser</ng-template>
        <ng-template #notBrowser>Is not browser</ng-template>
      `,
      imports: [NgxIfBrowserDirective]
    })
    class TestDirectiveComponent {
      @ViewChild(NgxIfBrowserDirective) public directive?: NgxIfBrowserDirective;
      public enabled = true;
    }

    let fixture: ComponentFixture<TestDirectiveComponent>;
    let templateRef: jest.Mocked<TemplateRef<any>>;
    let viewContainer: jest.Mocked<ViewContainerRef>;
    let platformService: jest.Mocked<NgxIfPlatformService>;

    beforeEach(() => {
      templateRef = {
        elementRef: jest.fn(),
        createEmbeddedView: jest.fn()
      } as unknown as jest.Mocked<TemplateRef<any>>;

      viewContainer = {
        length: jest.fn(),
        remove: jest.fn(),
        createEmbeddedView: jest.fn(),
        createComponent: jest.fn()
      } as unknown as jest.Mocked<ViewContainerRef>;

      platformService = {
        isServer: jest.fn(),
        isBrowser: jest.fn()
      } as unknown as jest.Mocked<NgxIfPlatformService>;

      fixture = TestBed.configureTestingModule({
        imports: [NgxIfPlatformModule, TestDirectiveComponent],
        providers: [
          { provide: TemplateRef, useValue: templateRef },
          { provide: ViewContainerRef, useValue: viewContainer },
          { provide: NgxIfPlatformService, useValue: platformService },
          { provide: PLATFORM_ID, useValue: 'server' }
        ]
      }).createComponent(TestDirectiveComponent);

      fixture.detectChanges();
    });

    it('should create an instance', () => {
      const directive = new NgxIfBrowserDirective(templateRef, viewContainer, platformService);
      expect(directive).toBeTruthy();
    });

    it('should create an disabled instance', () => {
      const component = fixture.componentInstance;
      component.enabled = false;
      fixture.detectChanges();
      const directive = new NgxIfBrowserDirective(templateRef, viewContainer, platformService);
      expect(directive).toBeTruthy();
    });
  });
});
