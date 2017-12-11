import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PowerComponent } from './power/power.component';
import { PowerLevelsComponent } from './power/power-levels/power-levels.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    PowerLevelsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
