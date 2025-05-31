import { ApplicationConfig, PLATFORM_ID, provideZonelessChangeDetection } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [provideZonelessChangeDetection(), { provide: PLATFORM_ID, useValue: 'browser' }]
};
