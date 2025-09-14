import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  constructor(private title:Title){
    this.title.setTitle("Monisha A - About Me");
  }

  list=[
    {src:"bulb.png",desc:"Enthusiastic about building user-friendly products that improve customer experience by combining clean UI design with scalable backend logic."},
    {src:"handshake.png",desc:"Open to mentorship and collaboration, with a passion for sharing knowledge and learning from peers in a team-oriented environment."},
    {src:"tools.png",desc:"Experienced in end-to-end development — from gathering requirements and designing the database schema to deploying and maintaining production-ready applications."},
    {src:"tick.png",desc:"Strong focus on code quality by following clean code principles, reusable component design, and consistent coding standards."},
    {src:"rocket.png",desc:"Passionate about continuous learning, currently exploring Next.js and advanced API integrations to expand my skill set."},
    {src:"speak.png",desc:"Strong communicator, capable of translating technical concepts into business-friendly language for stakeholders."}
  ]

}
