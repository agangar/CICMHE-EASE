import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QueryComponent } from './query/query.component';
import { ResultsComponent } from './results/results.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { FacetsComponent } from './facets/facets.component';
import { ToggleComponent } from './toggle/toggle.component';
import {CommonModule} from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatOptionModule} from '@angular/material/';
import {MatSelectModule} from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatListModule} from '@angular/material/list'
import {MatIconModule} from '@angular/material/icon'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import {MatExpansionModule} from '@angular/material/expansion'


@NgModule({
  declarations: [
    AppComponent,
    QueryComponent,
    ResultsComponent,
    SearchHistoryComponent,
    FacetsComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatOptionModule,
    MatSelectModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatIconModule,
    FormsModule,
    MatExpansionModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
