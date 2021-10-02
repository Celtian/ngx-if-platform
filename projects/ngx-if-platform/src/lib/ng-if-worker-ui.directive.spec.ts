import { Component, PLATFORM_ID, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgIfWorkerUiDirective } from './ng-if-worker-ui.directive';
import { NgxPlatformModule } from './ngx-if-platform.module';
import { NgxPlatformService } from './ngx-if-platform.service';

describe('NgIfWorkerUiDirective', () => {
  describe('inline style', () => {
    @Component({
      template: `
      <div *ngIfWorkerUi>Is worker ui</div>
    `
    })
    class TestDirectiveComponent {
      @ViewChild(NgIfWorkerUiDirective) public directive: NgIfWorkerUiDirective;
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
          { provide: PLATFORM_ID, useValue: 'browserWorkerUi' },
        ]
      }).createComponent(TestDirectiveComponent);

      fixture.detectChanges();
    });

    it('should create an instance', () => {
      const directive = new NgIfWorkerUiDirective(templateRef, viewContainer, platformService);
      expect(directive).toBeTruthy();
    });

  });

  describe('template style', () => {
    @Component({
      template: `
        <ng-template [ngIfWorkerUi]="enabled" [ngIfNotWorkerUi]="notWorkerUi">Is worker ui</ng-template>
        <ng-template #notWorkerUi>Is not worker ui</ng-template>
      `
    })
    class TestDirectiveComponent {
      @ViewChild(NgIfWorkerUiDirective) public directive: NgIfWorkerUiDirective;
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
          { provide: PLATFORM_ID, useValue: 'browserWorkerUi' },
        ]
      }).createComponent(TestDirectiveComponent);

      fixture.detectChanges();
    });

    it('should create an instance', () => {
      const directive = new NgIfWorkerUiDirective(templateRef, viewContainer, platformService);
      expect(directive).toBeTruthy();
    });

    it('should create an disabled instance', () => {
      const component = fixture.componentInstance;
      component.enabled = false;
      fixture.detectChanges();
      const directive = new NgIfWorkerUiDirective(templateRef, viewContainer, platformService);
      expect(directive).toBeTruthy();
    });
  });

  describe('template style which do not match', () => {
    @Component({
      template: `
        <ng-template [ngIfWorkerUi]="enabled" [ngIfNotWorkerUi]="notWorkerUi">Is worker ui</ng-template>
        <ng-template #notWorkerUi>Is not worker ui</ng-template>
      `
    })
    class TestDirectiveComponent {
      @ViewChild(NgIfWorkerUiDirective) public directive: NgIfWorkerUiDirective;
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
      const directive = new NgIfWorkerUiDirective(templateRef, viewContainer, platformService);
      expect(directive).toBeTruthy();
    });

    it('should create an disabled instance', () => {
      const component = fixture.componentInstance;
      component.enabled = false;
      fixture.detectChanges();
      const directive = new NgIfWorkerUiDirective(templateRef, viewContainer, platformService);
      expect(directive).toBeTruthy();
    });
  });
});
