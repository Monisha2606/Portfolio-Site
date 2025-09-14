import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoute, routes } from '../app.routes';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navLinks: AppRoute[] = routes;
}
