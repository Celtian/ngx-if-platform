import { NgModule, PLATFORM_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxIfPlatformModule } from 'projects/ngx-if-platform/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxIfPlatformModule],
  bootstrap: [AppComponent],
  providers: [{ provide: PLATFORM_ID, useValue: 'browser' }]
})
export class AppModule {}
