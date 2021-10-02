import { isPlatformBrowser, isPlatformServer, isPlatformWorkerApp, isPlatformWorkerUi } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable()
export class NgxPlatformService {
  constructor(@Inject(PLATFORM_ID) protected platformId: any) {}

  public get isServer(): boolean {
    return isPlatformServer(this.platformId);
  }

  public get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  public get isWorkerApp(): boolean {
    return isPlatformWorkerApp(this.platformId);
  }

  public get isWorkerUi(): boolean {
    return isPlatformWorkerUi(this.platformId);
  }
}
