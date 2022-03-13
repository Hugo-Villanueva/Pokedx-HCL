import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCheckboxModule, MatIconModule, MatCardModule, MatInputModule, MatToolbarModule,
  MatSidenavModule, MatExpansionModule, MatTooltipModule, MatListModule, MatProgressSpinnerModule,
  MatFormFieldModule, MatRadioModule, MatDividerModule, MatNativeDateModule
} from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule, } from '@angular/forms';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTreeModule } from '@angular/material/tree';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';

const modules = [
  MatSnackBarModule,
  MatSortModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  BrowserAnimationsModule,
  MatSidenavModule,
  MatExpansionModule,
  MatTooltipModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatRadioModule,
  MatDividerModule,
  MatBadgeModule,
  MatMenuModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatNativeDateModule,
  ReactiveFormsModule,
  MatDialogModule,
  MatChipsModule,
  MatTableModule,
  MatPaginatorModule,
  MatTreeModule,
  MatGridListModule
];

@NgModule({
  imports: [modules],
  exports: [modules],
  providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }]
})
export class MaterialModule { }
