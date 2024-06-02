import { Component, PLATFORM_ID, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxIfPlatformModule } from './ngx-if-platform.module';
import { NgxIfPlatformService } from './ngx-if-platform.service';
import { NgxIfServerDirective } from './ngx-if-server.directive';

describe('NgxIfServerDirective', () => {
  describe('inline style', () => {
    @Component({
      template: ` <div *ngxIfServer>Is server</div> `
    })
    class TestDirectiveComponent {
      @ViewChild(NgxIfServerDirective) public directive: NgxIfServerDirective;
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
      const directive = new NgxIfServerDirective(templateRef, viewContainer, platformService);
      expect(directive).toBeTruthy();
    });
  });

  describe('template style', () => {
    @Component({
      template: `
        <ng-template [ngxIfServer]="enabled" [ngxIfNotServer]="notServer">Is server</ng-template>
        <ng-template #notServer>Is not server</ng-template>
      `
    })
    class TestDirectiveComponent {
      @ViewChild(NgxIfServerDirective) public directive: NgxIfServerDirective;
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
      const directive = new NgxIfServerDirective(templateRef, viewContainer, platformService);
      expect(directive).toBeTruthy();
    });

    it('should create an disabled instance', () => {
      const component = fixture.componentInstance;
      component.enabled = false;
      fixture.detectChanges();
      const directive = new NgxIfServerDirective(templateRef, viewContainer, platformService);
      expect(directive).toBeTruthy();
    });
  });

  describe('template style which do not match', () => {
    @Component({
      template: `
        <ng-template [ngxIfServer]="enabled" [ngxIfNotServer]="notServer">Is server</ng-template>
        <ng-template #notServer>Is not server</ng-template>
      `
    })
    class TestDirectiveComponent {
      @ViewChild(NgxIfServerDirective) public directive: NgxIfServerDirective;
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
      const directive = new NgxIfServerDirective(templateRef, viewContainer, platformService);
      expect(directive).toBeTruthy();
    });

    it('should create an disabled instance', () => {
      const component = fixture.componentInstance;
      component.enabled = false;
      fixture.detectChanges();
      const directive = new NgxIfServerDirective(templateRef, viewContainer, platformService);
      expect(directive).toBeTruthy();
    });
  });
});
