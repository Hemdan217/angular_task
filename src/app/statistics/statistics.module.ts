import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { SummaryComponent } from './summary/summary.component';
import { DetailsComponent } from './details/details.component';
const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    title: 'Statistics Page',
  },
];

@NgModule({
  declarations: [ContentComponent, HeaderComponent, SummaryComponent, DetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class StatisticsModule {}
