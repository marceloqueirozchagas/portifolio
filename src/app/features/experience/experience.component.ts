import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  experience = {
    title: 'Experiência',
    experienceList: [
      {start:'jul 2020', end:'Present', title: 'Streetwire', subTitle: 'Real Estate Data Direct', description: 'Analista de Sistemas - Python, C#, SQL, Frontend Developer (Angular, React)'},
      {start:'jul 2016', end:'set 2021', title: 'Miltec', subTitle: 'Tecnologia da Informação', description: 'Analista de Sistemas - C# .Net, SQL,Frontend Developer (AngularJS - Angular, Ionic)'},
      {start:'jul 2015', end:'jul 2016', title: 'SGI', subTitle: 'Superintendência de Gestão da Informação', description:'Analista de Sistemas - C# .Net, SQL,Frontend Developer (AngularJS)'},
      {start:'out 2011', end:'jul 2015', title: 'SED', subTitle: 'Secretaria de Estado de Educação', description:'Analista de Sistemas - Scrum Master, C# WebForms, Frontend Developer (jquery)'}
    ]
  };

  education = {
    title: 'Educação',
    educationList: [
      {start:'jan 2006', end:'dez 2010', title: 'Faculdade Campo Grande', subTitle: 'Ciência da Computação', description: 'Bacharelado em ciência da computação'},
    ]
  }

  ngOnInit(): void {
  }

}
