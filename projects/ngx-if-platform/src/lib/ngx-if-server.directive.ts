/* eslint-disable @typescript-eslint/no-explicit-any */
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgxIfAbstractDirective } from './ngx-if-abstract.directive';
import { NgxIfPlatformService } from './ngx-if-platform.service';

@Directive({
  selector: '[ngxIfServer]',
  standalone: true
})
export class NgxIfServerDirective extends NgxIfAbstractDirective {
  @Input() public set ngxIfServer(enabled: any) {
    this.setIf(enabled);
  }

  @Input()
  public set ngxIfNotServer(temp: TemplateRef<any>) {
    this.setIfNot(temp);
  }

  constructor(
    protected override templateRef: TemplateRef<any>,
    protected override viewContainer: ViewContainerRef,
    private platformService: NgxIfPlatformService
  ) {
    super(templateRef, viewContainer);
  }

  protected get shouldDisplay(): boolean {
    return this.platformService.isServer;
  }
}
