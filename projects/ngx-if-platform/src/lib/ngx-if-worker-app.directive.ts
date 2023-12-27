import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgxIfAbstractDirective } from './ngx-if-abstract.directive';
import { NgxIfPlatformService } from './ngx-if-platform.service';

@Directive({
  selector: '[ngxIfWorkerApp]',
  standalone: true
})
export class NgxIfWorkerAppDirective extends NgxIfAbstractDirective {
  @Input() public set ngxIfWorkerApp(enabled: any) {
    this.setIf(enabled);
  }

  @Input()
  public set ngxIfNotWorkerApp(temp: TemplateRef<any>) {
    this.setIfNot(temp);
  }

  constructor(
    protected templateRef: TemplateRef<any>,
    protected viewContainer: ViewContainerRef,
    private platformService: NgxIfPlatformService
  ) {
    super(templateRef, viewContainer);
  }

  protected get shouldDisplay(): boolean {
    return this.platformService.isWorkerApp;
  }
}
