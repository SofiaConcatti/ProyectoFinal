import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  drawer: MatDrawer;
  constructor(private readonly matDrawer: MatDrawer) {
    this.drawer = matDrawer;
  }

  ngOnInit(): void {}
}
