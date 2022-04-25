import { Component, OnInit} from '@angular/core';
import { UserModel } from '../Modelos/UserModel';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { loginInterface } from '../Interfes/login.interface';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router) {}
  public error=false;
  User = new UserModel();
  form!: FormGroup;
  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: [
        ''
      ],
      password: [
        ""
      ],
    });
  }
  ComprobarSession(): void {
    this.User.nombre = this.form.get('nombre')?.value;
    this.User.UserPassword = this.form.get('password')?.value;
    if (this.User.nombre  === "erick.gerar" && this.User.UserPassword=== "123456"){
      sessionStorage.setItem('UserName', (this.User.nombre ));
      sessionStorage.setItem('password', (this.User.UserPassword));
      localStorage.setItem("validador","Si");
    }else{
      this.error=true;
      console.log(this.User.nombre ,this.User.UserPassword)
    }
  }
}
