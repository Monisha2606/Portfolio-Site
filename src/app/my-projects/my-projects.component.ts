import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.css'
})
export class MyProjectsComponent {
  constructor(private title:Title){
    this.title.setTitle("Monisha A - Projects");
  }

  projects=[
    {
      img:"assets/images/invoice.jpg",
      title:"Invoice Generator",
      desc:"Laravel + PHP + Queue Handling + Event Based Emails",
      url:"https://github.com/Monisha2606/invoice-app",
      urlTitle:"Invoice"
    },
    {
      img:"assets/images/portfolio.jpeg",
      title:"Portfolio Website",
      desc:"Angular 19v + Responsive Design + Custom Animations",
      url:"https://github.com/Monisha2606/invoice-app",
      urlTitle:"My Devfolio"
    }
  ]
}
