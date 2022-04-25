import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../Modelos/ProductModel';
import { map } from 'rxjs/operators';

export class Peticion {
  protected url = "https://makeup-api.herokuapp.com/api/v1/products.json"
  constructor(
    protected httpClient: HttpClient,
    protected endpoint: string,
  ) {}
  public obtener_data(): Observable<ProductModel[]>{
    return this.httpClient.get<ProductModel[]>(`${this.url}${this.endpoint}`).pipe(map (res => res as ProductModel[]));
  }

}
