import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Peticion } from './Peticion.service';
@Injectable({
  providedIn: 'root'
})
export class Product extends Peticion {
  constructor(
    protected http: HttpClient,
    @Inject('endPoint') endPoint: string
  ) {
    super(http, endPoint);
  }
}
