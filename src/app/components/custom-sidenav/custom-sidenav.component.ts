import { Component, computed, Input, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import {MaterialModule} from '../../material/material.module'

import {MenuItem} from '../../menu-item'

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [MaterialModule, RouterOutlet, RouterLink, RouterLinkActive], 
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss'
})
export class CustomSidenavComponent {

  sideNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val)
  }

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
    {
      icon: "analytics",
      label: "Analytics",
      route: "analytics",
    },
  ]);

 profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100')
}
