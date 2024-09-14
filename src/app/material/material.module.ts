import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


export const material = [MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule]
@NgModule({
  imports: [
    CommonModule,
    material
  ],
  exports: [material]
})
export class MaterialModule { }
