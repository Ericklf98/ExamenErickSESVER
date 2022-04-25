import { Pipe, PipeTransform } from '@angular/core';
import { ProductModel } from '../Modelos/ProductModel';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(productos: ProductModel[], pagina:number=0): ProductModel[] {
    return productos.slice(pagina,pagina+9);
  }

}
