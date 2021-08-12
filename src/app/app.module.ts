import { NgModule } from '@angular/core';

//service
import { BreakingbadService } from './service/breakingbad.service';

//components
import { AppComponent } from './app.component';
import { DataTableComponent } from './components/data-table/data-table.component';

// modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [AppComponent, DataTableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatSlideToggleModule,
  ],
  providers: [BreakingbadService],
  bootstrap: [AppComponent],
})
export class AppModule {}
