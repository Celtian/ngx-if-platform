import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgIfAbstractDirective } from './ng-if-abstract.directive';
import { NgxPlatformService } from './ngx-if-platform.service';

@Directive({
  selector: '[ngIfWorkerApp]'
})
export class NgIfWorkerAppDirective extends NgIfAbstractDirective {
  @Input('ngIfWorkerApp') public set ngIf(enabled: any) {
    super.ngIf = enabled;
  }

  @Input('ngIfNotWorkerApp')
  public set ngIfNot(temp: TemplateRef<any>) {
    super.ngIfNot = temp;
  }

  constructor(
    protected templateRef: TemplateRef<any>,
    protected viewContainer: ViewContainerRef,
    private platformService: NgxPlatformService
  ) {
    super(templateRef, viewContainer);
  }

  protected get shouldDisplay(): boolean {
    return this.platformService.isWorkerApp;
  }
}
