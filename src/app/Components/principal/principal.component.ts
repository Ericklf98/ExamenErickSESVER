import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  nombre_usuario = sessionStorage.getItem('nombre_usuario');
  constructor() { }

  ngOnInit(): void {
  }
  @Output() sidenavClose = new EventEmitter();

  public onSidenavClose = () => {
    console.log("hey")
    this.sidenavClose.emit();
  }

}
