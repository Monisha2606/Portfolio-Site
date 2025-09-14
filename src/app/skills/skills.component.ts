import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  constructor(private title:Title){
    this.title.setTitle("Monisha A - Skills");
    
  }

  frontendSkills = [
    { name: 'Angular 16+', icon: 'assets/images/angular.png' },
    { name: 'HTML', icon: 'assets/images/html.png' },
    { name: 'CSS', icon: 'assets/images/css.png' },
    { name: 'JavaScript', icon: 'assets/images/javascript.png' },
    { name: 'TypeScript', icon: 'assets/images/typescript.png' }
  ];

  backendSkills = [
    { name: 'PHP', icon: 'assets/images/php.png' },
    { name: 'Laravel', icon: 'assets/images/laravel.png' },
    { name: 'Phalcon (Fundamentals)', icon: 'assets/images/phalcon.png' },
    { name: 'Java', icon: 'assets/images/java.png' },
  ];

  databaseSkills = [
    { name: 'MySQL', icon: 'assets/images/mysql.png' },
    { name: 'MongoDB', icon: 'assets/images/mongodb.png' }
  ];

  integrationSkills = [
    {name: 'RESTful APIs', icon: 'assets/images/api.png'},
    {name: 'JWT Authentication', icon: 'assets/images/authentication.png'}
  ];

  toolSkills = [
    {name: 'Git', icon: 'assets/images/git.png'},
    {name: 'Agile Methodologies', icon: 'assets/images/agile.png'},
    {name: 'Unit Testing', icon: 'assets/images/testing.png'},
    {name: 'Lazy Loading', icon: 'assets/images/loading.png'},
  ];

  otherSkills = [
    {name: 'Cross-functional collaboration', icon: 'assets/images/collaboration.png'},
    {name: 'Problem-solving', icon: 'assets/images/solving.png'},
  ];
}
