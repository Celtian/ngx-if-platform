/* eslint-disable @typescript-eslint/no-explicit-any */
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable()
export class NgxIfPlatformService {
  constructor(@Inject(PLATFORM_ID) protected platformId: any) {}

  public get isServer(): boolean {
    return isPlatformServer(this.platformId);
  }

  public get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}
