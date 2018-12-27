import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { IntlModule } from '@progress/kendo-angular-intl';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { LabelModule } from '@progress/kendo-angular-label';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { FeesComponent } from './fees/fees.component';
import { CostComponent } from './cost/cost.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    FeesComponent,
    CostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IntlModule,
    DateInputsModule,
    BrowserAnimationsModule,
    ChartsModule,
    LabelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
