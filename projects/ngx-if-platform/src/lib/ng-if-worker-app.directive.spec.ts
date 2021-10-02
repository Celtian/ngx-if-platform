import { Component, PLATFORM_ID, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgIfWorkerAppDirective } from './ng-if-worker-app.directive';
import { NgxPlatformModule } from './ngx-if-platform.module';
import { NgxPlatformService } from './ngx-if-platform.service';

describe('NgIfWorkerAppDirective', () => {
  describe('inline style', () => {
    @Component({
      template: `
      <div *ngIfWorkerApp>Is worker app</div>
    `
    })
    class TestDirectiveComponent {
      @ViewChild(NgIfWorkerAppDirective) public directive: NgIfWorkerAppDirective;
    }

    let fixture: ComponentFixture<TestDirectiveComponent>;
    let templateRef: jasmine.SpyObj<TemplateRef<any>>;
    let viewContainer: jasmine.SpyObj<ViewContainerRef>;
    let platformService: jasmine.SpyObj<NgxPlatformService>;

    beforeEach(() => {
      templateRef = jasmine.createSpyObj('TemplateRef<RepeatDirectiveContext>',
        ['elementRef', 'createEmbeddedView']);
      viewContainer = jasmine.createSpyObj('ViewContainerRef',
        ['length', 'remove', 'createEmbeddedView', 'createComponent']);
      platformService = jasmine.createSpyObj('NgxPlatformService',
        ['isServer', 'isBrowser', 'isWorkerApp', 'isWorkerUi']);

      fixture = TestBed.configureTestingModule({
        imports: [NgxPlatformModule],
        declarations: [TestDirectiveComponent],
        providers: [
          { provide: TemplateRef, useValue: templateRef },
          { provide: ViewContainerRef, useValue: viewContainer },
          { provide: NgxPlatformService, useValue: platformService },
          { provide: PLATFORM_ID, useValue: 'browserWorkerApp' },
        ]
      }).createComponent(TestDirectiveComponent);

      fixture.detectChanges();
    });

    it('should create an instance', () => {
      const directive = new NgIfWorkerAppDirective(templateRef, viewContainer, platformService);
      expect(directive).toBeTruthy();
    });

  });

  describe('template style', () => {
    @Component({
      template: `
      <ng-template [ngIfWorkerApp]="enabled" [ngIfNotWorkerApp]="notWorkerApp">Is worker app</ng-template>
      <ng-template #notWorkerApp>Is not worker app</ng-template>
    `
    })
    class TestDirectiveComponent {
      @ViewChild(NgIfWorkerAppDirective) public directive: NgIfWorkerAppDirective;
      public enabled = true;
    }

    let fixture: ComponentFixture<TestDirectiveComponent>;
    let templateRef: jasmine.SpyObj<TemplateRef<any>>;
    let viewContainer: jasmine.SpyObj<ViewContainerRef>;
    let platformService: jasmine.SpyObj<NgxPlatformService>;

    beforeEach(() => {
      templateRef = jasmine.createSpyObj('TemplateRef<RepeatDirectiveContext>',
        ['elementRef', 'createEmbeddedView']);
      viewContainer = jasmine.createSpyObj('ViewContainerRef',
        ['length', 'remove', 'createEmbeddedView', 'createComponent']);
      platformService = jasmine.createSpyObj('NgxPlatformService',
        ['isServer', 'isBrowser', 'isWorkerApp', 'isWorkerUi']);

      fixture = TestBed.configureTestingModule({
        imports: [NgxPlatformModule],
        declarations: [TestDirectiveComponent],
        providers: [
          { provide: TemplateRef, useValue: templateRef },
          { provide: ViewContainerRef, useValue: viewContainer },
          { provide: NgxPlatformService, useValue: platformService },
          { provide: PLATFORM_ID, useValue: 'browserWorkerApp' },
        ]
      }).createComponent(TestDirectiveComponent);

      fixture.detectChanges();
    });

    it('should create an instance', () => {
      const directive = new NgIfWorkerAppDirective(templateRef, viewContainer, platformService);
      expect(directive).toBeTruthy();
    });

    it('should create an disabled instance', () => {
      const component = fixture.componentInstance;
      component.enabled = false;
      fixture.detectChanges();
      const directive = new NgIfWorkerAppDirective(templateRef, viewContainer, platformService);
      expect(directive).toBeTruthy();
    });
  });

  describe('template style which do not match', () => {
    @Component({
      template: `
        <ng-template [ngIfWorkerApp]="enabled" [ngIfNotWorkerApp]="notWorkerApp">Is worker app</ng-template>
        <ng-template #notWorkerApp>Is not worker app</ng-template>
      `
    })
    class TestDirectiveComponent {
      @ViewChild(NgIfWorkerAppDirective) public directive: NgIfWorkerAppDirective;
      public enabled = true;
    }

    let fixture: ComponentFixture<TestDirectiveComponent>;
    let templateRef: jasmine.SpyObj<TemplateRef<any>>;
    let viewContainer: jasmine.SpyObj<ViewContainerRef>;
    let platformService: jasmine.SpyObj<NgxPlatformService>;

    beforeEach(() => {
      templateRef = jasmine.createSpyObj('TemplateRef<RepeatDirectiveContext>',
        ['elementRef', 'createEmbeddedView']);
      viewContainer = jasmine.createSpyObj('ViewContainerRef',
        ['length', 'remove', 'createEmbeddedView', 'createComponent']);
      platformService = jasmine.createSpyObj('NgxPlatformService',
        ['isServer', 'isBrowser', 'isWorkerApp', 'isWorkerUi']);

      fixture = TestBed.configureTestingModule({
        imports: [NgxPlatformModule],
        declarations: [TestDirectiveComponent],
        providers: [
          { provide: TemplateRef, useValue: templateRef },
          { provide: ViewContainerRef, useValue: viewContainer },
          { provide: NgxPlatformService, useValue: platformService },
          { provide: PLATFORM_ID, useValue: 'server' },
        ]
      }).createComponent(TestDirectiveComponent);

      fixture.detectChanges();
    });

    it('should create an instance', () => {
      const directive = new NgIfWorkerAppDirective(templateRef, viewContainer, platformService);
      expect(directive).toBeTruthy();
    });

    it('should create an disabled instance', () => {
      const component = fixture.componentInstance;
      component.enabled = false;
      fixture.detectChanges();
      const directive = new NgIfWorkerAppDirective(templateRef, viewContainer, platformService);
      expect(directive).toBeTruthy();
    });
  });
});
