import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { HttpClient } from '@angular/common/http';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
