import { Component, PLATFORM_ID, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxIfPlatformModule } from './ngx-if-platform.module';
import { NgxIfPlatformService } from './ngx-if-platform.service';
import { NgxIfWorkerAppDirective } from './ngx-if-worker-app.directive';

describe('NgxIfWorkerAppDirective', () => {
  describe('inline style', () => {
    @Component({
      template: `
      <div *ngxIfWorkerApp>Is worker app</div>
    `
    })
    class TestDirectiveComponent {
      @ViewChild(NgxIfWorkerAppDirective) public directive: NgxIfWorkerAppDirective;
    }

    let fixture: ComponentFixture<TestDirectiveComponent>;
    let templateRef: jasmine.SpyObj<TemplateRef<any>>;
    let viewContainer: jasmine.SpyObj<ViewContainerRef>;
    let platformService: jasmine.SpyObj<NgxIfPlatformService>;

    beforeEach(() => {
      templateRef = jasmine.createSpyObj('TemplateRef<RepeatDirectiveContext>',
        ['elementRef', 'createEmbeddedView']);
      viewContainer = jasmine.createSpyObj('ViewContainerRef',
        ['length', 'remove', 'createEmbeddedView', 'createComponent']);
      platformService = jasmine.createSpyObj('NgxIfPlatformService',
        ['isServer', 'isBrowser', 'isWorkerApp', 'isWorkerUi']);

      fixture = TestBed.configureTestingModule({
        imports: [NgxIfPlatformModule],
        declarations: [TestDirectiveComponent],
        providers: [
          { provide: TemplateRef, useValue: templateRef },
          { provide: ViewContainerRef, useValue: viewContainer },
          { provide: NgxIfPlatformService, useValue: platformService },
          { provide: PLATFORM_ID, useValue: 'browserWorkerApp' },
        ]
      }).createComponent(TestDirectiveComponent);

      fixture.detectChanges();
    });

    it('should create an instance', () => {
      const directive = new NgxIfWorkerAppDirective(templateRef, viewContainer, platformService);
      expect(directive).toBeTruthy();
    });

  });

  describe('template style', () => {
    @Component({
      template: `
      <ng-template [ngxIfWorkerApp]="enabled" [ngxIfNotWorkerApp]="notWorkerApp">Is worker app</ng-template>
      <ng-template #notWorkerApp>Is not worker app</ng-template>
    `
    })
    class TestDirectiveComponent {
      @ViewChild(NgxIfWorkerAppDirective) public directive: NgxIfWorkerAppDirective;
      public enabled = true;
    }

    let fixture: ComponentFixture<TestDirectiveComponent>;
    let templateRef: jasmine.SpyObj<TemplateRef<any>>;
    let viewContainer: jasmine.SpyObj<ViewContainerRef>;
    let platformService: jasmine.SpyObj<NgxIfPlatformService>;

    beforeEach(() => {
      templateRef = jasmine.createSpyObj('TemplateRef<RepeatDirectiveContext>',
        ['elementRef', 'createEmbeddedView']);
      viewContainer = jasmine.createSpyObj('ViewContainerRef',
        ['length', 'remove', 'createEmbeddedView', 'createComponent']);
      platformService = jasmine.createSpyObj('NgxIfPlatformService',
        ['isServer', 'isBrowser', 'isWorkerApp', 'isWorkerUi']);

      fixture = TestBed.configureTestingModule({
        imports: [NgxIfPlatformModule],
        declarations: [TestDirectiveComponent],
        providers: [
          { provide: TemplateRef, useValue: templateRef },
          { provide: ViewContainerRef, useValue: viewContainer },
          { provide: NgxIfPlatformService, useValue: platformService },
          { provide: PLATFORM_ID, useValue: 'browserWorkerApp' },
        ]
      }).createComponent(TestDirectiveComponent);

      fixture.detectChanges();
    });

    it('should create an instance', () => {
      const directive = new NgxIfWorkerAppDirective(templateRef, viewContainer, platformService);
      expect(directive).toBeTruthy();
    });

    it('should create an disabled instance', () => {
      const component = fixture.componentInstance;
      component.enabled = false;
      fixture.detectChanges();
      const directive = new NgxIfWorkerAppDirective(templateRef, viewContainer, platformService);
      expect(directive).toBeTruthy();
    });
  });

  describe('template style which do not match', () => {
    @Component({
      template: `
        <ng-template [ngxIfWorkerApp]="enabled" [ngxIfNotWorkerApp]="notWorkerApp">Is worker app</ng-template>
        <ng-template #notWorkerApp>Is not worker app</ng-template>
      `
    })
    class TestDirectiveComponent {
      @ViewChild(NgxIfWorkerAppDirective) public directive: NgxIfWorkerAppDirective;
      public enabled = true;
    }

    let fixture: ComponentFixture<TestDirectiveComponent>;
    let templateRef: jasmine.SpyObj<TemplateRef<any>>;
    let viewContainer: jasmine.SpyObj<ViewContainerRef>;
    let platformService: jasmine.SpyObj<NgxIfPlatformService>;

    beforeEach(() => {
      templateRef = jasmine.createSpyObj('TemplateRef<RepeatDirectiveContext>',
        ['elementRef', 'createEmbeddedView']);
      viewContainer = jasmine.createSpyObj('ViewContainerRef',
        ['length', 'remove', 'createEmbeddedView', 'createComponent']);
      platformService = jasmine.createSpyObj('NgxIfPlatformService',
        ['isServer', 'isBrowser', 'isWorkerApp', 'isWorkerUi']);

      fixture = TestBed.configureTestingModule({
        imports: [NgxIfPlatformModule],
        declarations: [TestDirectiveComponent],
        providers: [
          { provide: TemplateRef, useValue: templateRef },
          { provide: ViewContainerRef, useValue: viewContainer },
          { provide: NgxIfPlatformService, useValue: platformService },
          { provide: PLATFORM_ID, useValue: 'server' },
        ]
      }).createComponent(TestDirectiveComponent);

      fixture.detectChanges();
    });

    it('should create an instance', () => {
      const directive = new NgxIfWorkerAppDirective(templateRef, viewContainer, platformService);
      expect(directive).toBeTruthy();
    });

    it('should create an disabled instance', () => {
      const component = fixture.componentInstance;
      component.enabled = false;
      fixture.detectChanges();
      const directive = new NgxIfWorkerAppDirective(templateRef, viewContainer, platformService);
      expect(directive).toBeTruthy();
    });
  });
});
