/* eslint-disable @typescript-eslint/no-explicit-any */
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgxIfAbstractDirective } from './ngx-if-abstract.directive';
import { NgxIfPlatformService } from './ngx-if-platform.service';

@Directive({
  selector: '[ngxIfBrowser]',
  standalone: true
})
export class NgxIfBrowserDirective extends NgxIfAbstractDirective {
  @Input() public set ngxIfBrowser(enabled: any) {
    this.setIf(enabled);
  }

  @Input()
  public set ngxIfNotBrowser(temp: TemplateRef<any>) {
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
    return this.platformService.isBrowser;
  }
}
