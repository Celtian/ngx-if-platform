import { Component } from '@angular/core';
import { NgxIfPlatformModule } from 'projects/ngx-if-platform/src/public-api';
import { VERSION } from '../environments/version';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
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
  public readonly codeWorkerApp =
    '<div *ngxIfWorkerApp>Is worker app inline</div><ng-template [ngxIfWorkerApp] [ngxIfNotWorkerApp]="notWorkerApp">Is worker app</ng-template><ng-template #notWorkerApp>Not worker app</ng-template>';
  public readonly codeWorkerUi =
    '<div *ngxIfWorkerUi>Is worker ui inline</div><ng-template [ngxIfWorkerUi] [ngxIfNotWorkerUi]="notWorkerUi">Is worker ui</ng-template><ng-template #notWorkerUi>Not worker ui</ng-template>';
}
