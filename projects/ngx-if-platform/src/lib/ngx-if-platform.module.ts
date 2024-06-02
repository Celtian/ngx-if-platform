import { NgModule } from '@angular/core';
import { NgxIfBrowserDirective } from './ngx-if-browser.directive';
import { NgxIfPlatformService } from './ngx-if-platform.service';
import { NgxIfServerDirective } from './ngx-if-server.directive';

@NgModule({
  imports: [NgxIfBrowserDirective, NgxIfServerDirective],
  exports: [NgxIfBrowserDirective, NgxIfServerDirective],
  providers: [NgxIfPlatformService]
})
export class NgxIfPlatformModule {}
