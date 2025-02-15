import { Component } from '@angular/core';
import { NgxIfPlatformModule } from '../../../ngx-if-platform/src/public-api';
import { VERSION } from '../environments/version';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [NgxIfPlatformModule]
})
export class AppComponent {
  public title = 'ngx-if-platform';
  public version = VERSION;

  public readonly codeServer =
    '<div *ngxIfServer>Is server inline</div><ng-template [ngxIfServer] [ngxIfNotServer]="notServer">Is server</ng-template><ng-template #notServer>Not server</ng-template>';
  public readonly codeBrowser =
    '<div *ngxIfBrowser>Is browser inline</div><ng-template [ngxIfBrowser] [ngxIfNotBrowser]="notBrowser">Is browser</ng-template><ng-template #notBrowser>Not browser</ng-template>';
}
