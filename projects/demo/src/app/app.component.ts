import { Component } from '@angular/core';
import { VERSION } from '../environments/version';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'ngx-if-platform';
  public version = VERSION;

  public readonly codeServer =
    '<div *ngIfServer>Is server inline</div><ng-template [ngIfServer] [ngIfNotServer]="notServer">Is server</ng-template><ng-template #notServer>Not server</ng-template>';
  public readonly codeBrowser =
    '<div *ngIfBrowser>Is browser inline</div><ng-template [ngIfBrowser] [ngIfNotBrowser]="notBrowser">Is browser</ng-template><ng-template #notBrowser>Not browser</ng-template>';
  public readonly codeWorkerApp =
    '<div *ngIfWorkerApp>Is worker app inline</div><ng-template [ngIfWorkerApp] [ngIfNotWorkerApp]="notWorkerApp">Is worker app</ng-template><ng-template #notWorkerApp>Not worker app</ng-template>';
  public readonly codeWorkerUi =
    '<div *ngIfWorkerUi>Is worker ui inline</div><ng-template [ngIfWorkerUi] [ngIfNotWorkerUi]="notWorkerUi">Is worker ui</ng-template><ng-template #notWorkerUi>Not worker ui</ng-template>';
}
