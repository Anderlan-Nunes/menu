import { Component, signal } from '@angular/core';

import {MaterialModule} from '../../material/material.module'

import {MenuItem} from '../../menu-item'

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [MaterialModule], 
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss'
})
export class CustomSidenavComponent {
  menuItems = signal<MenuItem[]>([
    {
      icon: "dashboard",
      label: "Dashboard",
      route: "dashboard",
    },
    {
      icon: "video_library",
      label: "Content",
      route: "content",
    },
  ]);


}
