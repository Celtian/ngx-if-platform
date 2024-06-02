import { ApplicationConfig, PLATFORM_ID, provideExperimentalZonelessChangeDetection } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [provideExperimentalZonelessChangeDetection(), { provide: PLATFORM_ID, useValue: 'browser' }]
};
