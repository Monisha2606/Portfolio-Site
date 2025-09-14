// app.routes.ts
import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ContactComponent } from './contact/contact.component';

export interface AppRoute {
  path: string;
  component: any;
  name: string;  
}

export const routes: AppRoute[] = [
  { path: "", component: AboutMeComponent, name: "About Me" },
  { path: "skills", component: SkillsComponent, name: "Skills" },
  { path: "experience", component: ExperienceComponent, name: "Experience" },
  { path: "projects", component: MyProjectsComponent, name: "Projects" },
  { path: "contact", component: ContactComponent, name: "Contact" }

];
