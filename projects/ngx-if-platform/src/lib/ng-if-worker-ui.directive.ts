import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgIfAbstractDirective } from './ng-if-abstract.directive';
import { NgxIfPlatformService } from './ngx-if-platform.service';

@Directive({
  selector: '[ngIfWorkerUi]'
})
export class NgIfWorkerUiDirective extends NgIfAbstractDirective {
  @Input('ngIfWorkerUi') public set ngIf(enabled: any) {
    super.ngIf = enabled;
  }

  @Input('ngIfNotWorkerUi')
  public set ngIfNot(temp: TemplateRef<any>) {
    super.ngIfNot = temp;
  }

  constructor(
    protected templateRef: TemplateRef<any>,
    protected viewContainer: ViewContainerRef,
    private platformService: NgxIfPlatformService
  ) {
    super(templateRef, viewContainer);
  }

  protected get shouldDisplay(): boolean {
    return this.platformService.isWorkerUi;
  }
}
