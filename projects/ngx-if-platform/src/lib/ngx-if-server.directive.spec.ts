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
