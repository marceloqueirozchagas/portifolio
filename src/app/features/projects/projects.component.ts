import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubApiService } from 'src/app/core/services/github-api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [GithubApiService],
})
export class ProjectsComponent implements OnInit {
  constructor(private githubApi: GithubApiService) {}

  projects = [
    {
      title: 'Invoice Generator',
      description: 'Template de cadastro de invoice simplificado',
      imgUrl: 'assets/img/project-invoice-generator.png',
      projectUrl: 'https://marceloqueirozchagas.github.io/invoice-generator/',
    },
    {
      title: 'Magma Engenharia',
      description: 'Site da Magma Engenharia',
      imgUrl: 'assets/img/project-magma.png',
      projectUrl: 'https://magmaengenharia.com.br/',
    },
    {
      title: 'Calculadora PGTA',
      description: 'Calculadora de Custos de Gestão de Terras Indígenas',
      imgUrl: 'assets/img/project-csf.png',
      projectUrl:
        'https://conservation-strategy.github.io/calculadora-terras-indigenas',
    },
  ];

  gitHubProjects: any = [];

  ngOnInit(): void {
    this.githubApi.getGithubRepos().subscribe((response: any) => {
      this.gitHubProjects = response;
    });
  }
}
