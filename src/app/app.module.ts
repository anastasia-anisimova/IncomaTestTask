import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { ResultComponent } from './result/result.component';
import {DataService} from './main/data.service';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatCardModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
