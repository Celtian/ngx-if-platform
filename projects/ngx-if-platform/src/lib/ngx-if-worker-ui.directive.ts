import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgxIfAbstractDirective } from './ngx-if-abstract.directive';
import { NgxIfPlatformService } from './ngx-if-platform.service';

@Directive({
  selector: '[ngxIfWorkerUi]',
  standalone: true
})
export class NgxIfWorkerUiDirective extends NgxIfAbstractDirective {
  @Input() public set ngxIfWorkerUi(enabled: any) {
    this.setIf(enabled);
  }

  @Input()
  public set ngxIfNotWorkerUi(temp: TemplateRef<any>) {
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
    return this.platformService.isWorkerUi;
  }
}
