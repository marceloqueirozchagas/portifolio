import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  menus = [
    { name: 'Home', url: '#home' },
    { name: 'Sobre', url: '#about' },
    { name: 'Experiência', url: '#experience' },
    { name: 'Projetos', url: '#projects' },
  ];

  ngOnInit(): void {}
}
