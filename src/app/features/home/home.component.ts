import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  locationMapUrl =
    'https://www.google.com.br/maps/place/Campo+Grande,+MS/@-20.4789459,-54.6826558,12.5z/data=!4m6!3m5!1s0x9486e6726b2b9f27:0xf5a8469ebc84d2c1!8m2!3d-20.4648517!4d-54.6218477!16zL20vMDMzNWR2?entry=ttu';
  whatsappUrl = 'https://api.whatsapp.com/send/?phone=5567992522442';
  personal = {
    profileImgUrl: 'assets/img/profile.jpg',
    greeting: 'Olá, eu sou',
    fullName: 'Marcelo Queiroz',
    occupation: 'Analista de Sistemas',
    description:
      'Sou Senior Software Developer com mais de 10 anos de experiência, especializado na criação de aplicações web. Sou um entusiasta apaixonado pela capacidade de integrar diversas tecnologias para desenvolver aplicativos interativos e inovadores. Minha trajetória profissional é marcada pelo comprometimento em criar soluções que atendam às necessidades dos usuários, combinando habilidades técnicas com uma abordagem centrada no usuário. Estou constantemente em busca de novos desafios e oportunidades para aprimorar minhas habilidades e contribuir para o avanço da tecnologia das empresas.',
    phoneNumber: '55 (67) 99252 2442',
    email: 'marceloqueirozchagas@hotmail.com',
    location: 'Brasil - Campo Grande/MS',
  };

  listSocial = [
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/marcelo-queiroz-636307a9',
      icon: 'fa fa-linkedin',
    },
    {
      name: 'github',
      url: 'https://github.com/marceloqueirozchagas',
      icon: 'fa fa-github',
    },
    {
      name: 'facebook',
      url: 'https://www.facebook.com/marcelo.queiroz.125',
      icon: 'fa fa-facebook',
    },
    {
      name: 'twitter',
      url: 'https://twitter.com/smartcelo3',
      icon: 'fa fa-twitter',
    },
  ];

  ngOnInit(): void {}
}
