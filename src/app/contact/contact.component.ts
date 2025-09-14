import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(private title:Title){
    this.title.setTitle("Monisha A - Contact");
  }

  contacts=[
    {src:"assets/images/email.png",desc:"k7monisha@gmail.com",url:"mailto:k7monisha@gmail.com"},
    {src:"assets/images/phone.png",desc:"+91 6379921760"},
    {src:"assets/images/location.png",desc:"Chennai"},
    {src:"assets/images/linkedin.png",desc:"monisha-adikesavan",url:"https://www.linkedin.com/in/monisha-adikeasavan"},
  ]
}
