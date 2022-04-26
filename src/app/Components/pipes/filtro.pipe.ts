import { Pipe, PipeTransform } from '@angular/core';
import { ProductModel } from '../Modelos/ProductModel';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(productos: ProductModel[], pagina:number=0,search:string=""): ProductModel[] {
    if(search.length===0){
      return productos.slice(pagina,pagina+9);
    }
    const filtrado=productos.filter((pro)=>pro.name.toLowerCase().includes(search.toLowerCase()));
    return filtrado.slice(pagina,pagina+9);
  }

}
