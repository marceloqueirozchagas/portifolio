import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}
  title = 'Sobre';
  description = `
    Com mais de 10 anos de experiência como desenvolvedor de software para web, sou um profissional altamente
    qualificado e comprometido com a excelência em todos os projetos que desempenho. Tenho Bacharelado em
    Ciência da Computação e domino as tecnologias mais recentes e eficientes, como C#, Python, SQL, JavaScript,
    Angular e React.`;
  occupationArea = {
    description: 'Meu ramo de atuação:',
    areas: [
      'Desenvolvimento de sistemas web e adição de recursos e funções exclusivas.',
      'Criação de sites estáticos e dinâmicos usando linguagens de programação.',
      'Desenvolvimento de aplicativos móveis que resolvem problemas comuns e facilitam a vida das pessoas.',
    ],
  };
  hireMeText =
    'Se você está procurando um desenvolvedor de software para web experiente e comprometido, não hesite em entrar em contato conosco. Estou ansioso para saber mais sobre seus objetivos de negócios e como posso ajudar a transformar suas ideias em realidade.';

  ngOnInit(): void {}
}
