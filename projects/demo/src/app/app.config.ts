import { ApplicationConfig, PLATFORM_ID, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(BrowserModule), { provide: PLATFORM_ID, useValue: 'browser' }]
};
