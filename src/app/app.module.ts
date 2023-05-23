import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './AppComponent';
import { DbzModule } from './dbz/dbz.module';

import { HeroesModule } from './heroes/heroe/heroes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeroesModule, DbzModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
