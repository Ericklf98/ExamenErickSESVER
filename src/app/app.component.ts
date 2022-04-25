import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}
  validar: string = '';
  @Output() sidenavClose = new EventEmitter();
  ngOnInit(): void {
    localStorage.setItem('validador', 'No');
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  };
  ngDoCheck(): void {
    this.validar = localStorage.getItem('validador')!;
  }
  ComprobarRuta(): boolean {
    this.validar= localStorage.getItem('validador')!;
    if (this.validar === 'No') {
      return false;
    } else {
      return true;
    }
  }
  title = 'PracticaErick';
}
