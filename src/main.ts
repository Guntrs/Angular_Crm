import { provideHttpClient } from '@angular/common/http';

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';




bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // <-- ESTA ES LA LÍNEA CRÍTICA
    ...appConfig.providers
  ]
});
