import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MaterialModule } from '../app/material/material.module'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'menu-hamb';
}
