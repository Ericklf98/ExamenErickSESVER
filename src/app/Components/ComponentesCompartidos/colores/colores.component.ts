import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css'],
})
export class ColoresComponent implements OnInit {
  @Input() hexadecimal = 0;
  constructor() {}

  ngOnInit(): void {
  }
}
