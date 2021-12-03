import { NgModule } from '@angular/core';
import { NgxIfBrowserDirective } from './ngx-if-browser.directive';
import { NgxIfPlatformService } from './ngx-if-platform.service';
import { NgxIfServerDirective } from './ngx-if-server.directive';
import { NgxIfWorkerAppDirective } from './ngx-if-worker-app.directive';
import { NgxIfWorkerUiDirective } from './ngx-if-worker-ui.directive';

@NgModule({
  declarations: [NgxIfBrowserDirective, NgxIfServerDirective, NgxIfWorkerAppDirective, NgxIfWorkerUiDirective],
  exports: [NgxIfBrowserDirective, NgxIfServerDirective, NgxIfWorkerAppDirective, NgxIfWorkerUiDirective],
  providers: [NgxIfPlatformService]
})
export class NgxIfPlatformModule {}
