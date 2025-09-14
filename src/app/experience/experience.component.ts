import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  constructor(private title:Title){
    this.title.setTitle("Monisha A - Experience");
  }

  experience= [
    {
      name: "NOVAC TECHNOLOGY SOLUTIONS",
      tech:["angular.png","html.png","css.png","javascript.png","laravel.png","mongodb.png","mysql.png","php.png"],
      desc: {
        role: "Software Developer ( Full Stack )",
        content: [
          "Led the development of secure, web-based financial applications.",
          "Reduced code duplication by 60% through reusable dynamic form components.",
          "Collaborated with backend developers to integrate RESTful APIs.",
          "Designed scalable databases (MySQL, MongoDB) and optimized application performance.",
          "Implemented lazy loading and code splitting, improving speed by 35%.",
          "Worked with QA and UX teams in Agile sprints, ensuring timely delivery."
        ]
      },
      year: "2024 - Present",
      location: "Chennai, India"
    },
    {
      name: "NOVAC TECHNOLOGY SOLUTIONS",
      tech:["php.png","html.png","css.png","javascript.png","mysql.png","phalcon.png"],
      desc: {
        role: "Software Developer Trainee",
        content: [
          "Developed a task tracking interface for internal employees, automating work log entries and improving data accuracy using Core PHP and MySQL.",
          "Enhanced operational efficiency by developing a rule engine using Phalcon and Next.js, streamlining project workflows.",
          "Used Postman to test APIs and debug request/response issues",
          "Supported senior developers in bug fixes and deployment preparation."
        ]
      },
      year: "2023 - 2024",
      location: "Chennai, India"
    }
  ]
}
