import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navLinks = [
    {
      label: 'Tienda',
      icon: 'store',
      link: './first-page',
      index: 0
    },
    {
      label: 'MiCuenta',
      icon: 'face',
      link: './second-page',
      index: 1
    },
    {
      label: 'Envio',
      icon: 'local_shipping',
      link: './third-page',
      index: 2
    },
    {
      label: 'Carrito',
      icon: 'shopping_cart',
      link: './fourth-page',
      index: 3
    }
  ];
  constructor() {}

  }
