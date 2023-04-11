import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'proyecto';
  @ViewChild('drawer') drawer!: MatDrawer;
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  toggle() {
    this.sidenav.toggle();
  }
}
