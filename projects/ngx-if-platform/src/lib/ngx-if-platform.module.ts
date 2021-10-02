import { NgModule } from '@angular/core';
import { NgIfBrowserDirective } from './ng-if-browser.directive';
import { NgIfServerDirective } from './ng-if-server.directive';
import { NgIfWorkerAppDirective } from './ng-if-worker-app.directive';
import { NgIfWorkerUiDirective } from './ng-if-worker-ui.directive';
import { NgxIfPlatformService } from './ngx-if-platform.service';

@NgModule({
  declarations: [NgIfBrowserDirective, NgIfServerDirective, NgIfWorkerAppDirective, NgIfWorkerUiDirective],
  exports: [NgIfBrowserDirective, NgIfServerDirective, NgIfWorkerAppDirective, NgIfWorkerUiDirective],
  providers: [NgxIfPlatformService]
})
export class NgxIfPlatformModule {}
