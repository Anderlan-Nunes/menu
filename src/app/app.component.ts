import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MaterialModule } from '../app/material/material.module'
import { CustomSidenavComponent } from "./components/custom-sidenav/custom-sidenav.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, CustomSidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'menu-hamb';
  collapsed= signal(false)
  sidenavWidth= computed(() => this.collapsed() ? '60px' : '250px')
}
