import { Directive, EmbeddedViewRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { coerceBooleanProperty } from './ngx-if-platform.utils';

@Directive()
export abstract class NgIfAbstractDirective implements OnInit {
  protected ngIfElseTemplate: TemplateRef<any>;
  protected ngIfEmbededView: EmbeddedViewRef<any>;
  protected ngIfElseEmbededView: EmbeddedViewRef<any>;

  @Input() public set ngIf(enabled: any) {
    this.enabled = coerceBooleanProperty(enabled);
    this.updateView();
  }
  protected enabled = true;

  @Input()
  public set ngIfNot(temp: TemplateRef<any>) {
    this.ngIfElseTemplate = temp;
    this.updateView();
  }

  constructor(protected templateRef: TemplateRef<any>, protected viewContainer: ViewContainerRef) {}

  public ngOnInit(): void {
    this.updateView();
  }

  protected abstract get shouldDisplay(): boolean;

  protected updateView(): void {
    this.viewContainer.detach();
    if (this.enabled) {
      if (this.shouldDisplay) {
        if (!this.ngIfEmbededView) {
          this.ngIfEmbededView = this.viewContainer.createEmbeddedView(this.templateRef);
          this.ngIfEmbededView.markForCheck();
        } else {
          this.viewContainer.insert(this.ngIfEmbededView).markForCheck();
        }
      } else {
        if (this.ngIfElseTemplate) {
          if (!this.ngIfElseEmbededView) {
            this.ngIfElseEmbededView = this.viewContainer.createEmbeddedView(this.ngIfElseTemplate);
            this.ngIfElseEmbededView.markForCheck();
          } else {
            this.viewContainer.insert(this.ngIfElseEmbededView).markForCheck();
          }
        }
      }
    } else {
      if (!this.ngIfEmbededView) {
        this.ngIfEmbededView = this.viewContainer.createEmbeddedView(this.templateRef);
        this.ngIfEmbededView.markForCheck();
      } else {
        this.viewContainer.insert(this.ngIfEmbededView).markForCheck();
      }
    }
  }
}
