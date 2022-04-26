
import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../../Modelos/ProductModel';
import { Product } from '../../Servicios/Product.service';
@Component({
  selector: 'app-universal',
  templateUrl: './universal.component.html',
  styleUrls: ['./universal.component.css'],
  providers: [Product, {provide: 'endPoint', useValue: ''}]
})
export class UniversalComponent implements OnInit {
  public pagina:number=0;//se ocupara para la paginacion
  public search:string="";
  constructor(private product: Product) {}
  arregloprocustos: ProductModel[] = [];//inicilizaremos el producto para evitar errores
  loader=true;
  ngOnInit(): void {
    this.product.obtener_data().subscribe(
      (item) => {
        if (item != null) {
          this.arregloprocustos = item;
          this.loader=false;
        }
      },
      (error) => console.log(error, 'nelll')
    );
  }
  //funciones para la paginacion
  ValidadorAnterior():boolean{
    if (this.pagina === 0) {
      return true;
    } else {
      return false;
    }
  }
  nextPage(){
    this.pagina+=9;
  }
  PreviousPage(){
    if(this.pagina>0){
      this.pagina-=9;
    }
  }
  Buscador(word:string){
    console.log("la word",word)
    this.pagina=0;
    this.search=word;
  }
}
