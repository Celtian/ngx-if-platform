import { Component, PLATFORM_ID, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxIfBrowserDirective } from './ngx-if-browser.directive';
import { NgxIfPlatformModule } from './ngx-if-platform.module';
import { NgxIfPlatformService } from './ngx-if-platform.service';

describe('NgxIfBrowserDirective', () => {
  describe('inline style', () => {
    @Component({
      template: ` <div *ngxIfBrowser>Is browser</div> `
    })
    class TestDirectiveComponent {
      @ViewChild(NgxIfBrowserDirective) public directive: NgxIfBrowserDirective;
    }

    let fixture: ComponentFixture<TestDirectiveComponent>;
    let templateRef: jasmine.SpyObj<TemplateRef<any>>;
    let viewContainer: jasmine.SpyObj<ViewContainerRef>;
    let platformService: jasmine.SpyObj<NgxIfPlatformService>;

    beforeEach(() => {
      templateRef = jasmine.createSpyObj('TemplateRef<RepeatDirectiveContext>', ['elementRef', 'createEmbeddedView']);
      viewContainer = jasmine.createSpyObj('ViewContainerRef', [
        'length',
        'remove',
        'createEmbeddedView',
        'createComponent'
      ]);
      platformService = jasmine.createSpyObj('NgxIfPlatformService', ['isServer', 'isBrowser']);

      fixture = TestBed.configureTestingModule({
        imports: [NgxIfPlatformModule],
        declarations: [TestDirectiveComponent],
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
      `
    })
    class TestDirectiveComponent {
      @ViewChild(NgxIfBrowserDirective) public directive: NgxIfBrowserDirective;
      public enabled = true;
    }

    let fixture: ComponentFixture<TestDirectiveComponent>;
    let templateRef: jasmine.SpyObj<TemplateRef<any>>;
    let viewContainer: jasmine.SpyObj<ViewContainerRef>;
    let platformService: jasmine.SpyObj<NgxIfPlatformService>;

    beforeEach(() => {
      templateRef = jasmine.createSpyObj('TemplateRef<RepeatDirectiveContext>', ['elementRef', 'createEmbeddedView']);
      viewContainer = jasmine.createSpyObj('ViewContainerRef', [
        'length',
        'remove',
        'createEmbeddedView',
        'createComponent'
      ]);
      platformService = jasmine.createSpyObj('NgxIfPlatformService', ['isServer', 'isBrowser']);

      fixture = TestBed.configureTestingModule({
        imports: [NgxIfPlatformModule],
        declarations: [TestDirectiveComponent],
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
      `
    })
    class TestDirectiveComponent {
      @ViewChild(NgxIfBrowserDirective) public directive: NgxIfBrowserDirective;
      public enabled = true;
    }

    let fixture: ComponentFixture<TestDirectiveComponent>;
    let templateRef: jasmine.SpyObj<TemplateRef<any>>;
    let viewContainer: jasmine.SpyObj<ViewContainerRef>;
    let platformService: jasmine.SpyObj<NgxIfPlatformService>;

    beforeEach(() => {
      templateRef = jasmine.createSpyObj('TemplateRef<RepeatDirectiveContext>', ['elementRef', 'createEmbeddedView']);
      viewContainer = jasmine.createSpyObj('ViewContainerRef', [
        'length',
        'remove',
        'createEmbeddedView',
        'createComponent'
      ]);
      platformService = jasmine.createSpyObj('NgxIfPlatformService', ['isServer', 'isBrowser']);

      fixture = TestBed.configureTestingModule({
        imports: [NgxIfPlatformModule],
        declarations: [TestDirectiveComponent],
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
