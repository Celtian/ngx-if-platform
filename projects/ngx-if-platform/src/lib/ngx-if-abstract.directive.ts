/* eslint-disable @typescript-eslint/no-explicit-any */
import { Directive, EmbeddedViewRef, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { coerceBooleanProperty } from './ngx-if-platform.utils';

@Directive()
export abstract class NgxIfAbstractDirective implements OnInit {
  protected ngxIfElseTemplate: TemplateRef<any>;
  protected ngxIfEmbededView: EmbeddedViewRef<any>;
  protected ngxIfElseEmbededView: EmbeddedViewRef<any>;
  protected enabled = true;

  constructor(
    protected templateRef: TemplateRef<any>,
    protected viewContainer: ViewContainerRef
  ) {}

  public ngOnInit(): void {
    this.updateView();
  }

  protected abstract get shouldDisplay(): boolean;

  protected updateView(): void {
    this.viewContainer.detach();
    if (this.enabled) {
      if (this.shouldDisplay) {
        if (!this.ngxIfEmbededView) {
          this.ngxIfEmbededView = this.viewContainer.createEmbeddedView(this.templateRef);
          this.ngxIfEmbededView.markForCheck();
        } else {
          this.viewContainer.insert(this.ngxIfEmbededView).markForCheck();
        }
      } else {
        if (this.ngxIfElseTemplate) {
          if (!this.ngxIfElseEmbededView) {
            this.ngxIfElseEmbededView = this.viewContainer.createEmbeddedView(this.ngxIfElseTemplate);
            this.ngxIfElseEmbededView.markForCheck();
          } else {
            this.viewContainer.insert(this.ngxIfElseEmbededView).markForCheck();
          }
        }
      }
    } else {
      if (!this.ngxIfEmbededView) {
        this.ngxIfEmbededView = this.viewContainer.createEmbeddedView(this.templateRef);
        this.ngxIfEmbededView.markForCheck();
      } else {
        this.viewContainer.insert(this.ngxIfEmbededView).markForCheck();
      }
    }
  }

  protected setIf(enabled: any): void {
    this.enabled = coerceBooleanProperty(enabled);
    this.updateView();
  }

  protected setIfNot(temp: TemplateRef<any>): void {
    this.ngxIfElseTemplate = temp;
    this.updateView();
  }
}
