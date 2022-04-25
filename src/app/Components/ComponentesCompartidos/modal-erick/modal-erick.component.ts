import { Component, OnInit ,Input,ChangeDetectionStrategy,ChangeDetectorRef} from '@angular/core';
import { Colores } from '../../Modelos/Colores.Model';
@Component({
  selector: 'app-modal-erick',
  templateUrl: './modal-erick.component.html',
  styleUrls: ['./modal-erick.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ModalErickComponent implements OnInit {
  @Input() open = false;
  @Input() nombre = '';
  @Input() precio = '';
  @Input() rating = 0;
  @Input() brand = '';
  @Input() category = '';
  @Input() description = '';
  @Input() product_type = '';
  @Input() colors= [];
  @Input() imagen = '../../../../assets/imagenes/imagenes/nodisponible.jpg';
  public title:string="";
  constructor() { }
  arreglocolores:Colores[] = [];
  ngOnInit(): void {
    this.arreglocolores=this.colors;
  }
  ngOnChanges():void{
  }
  cambiarEstado():boolean{
    return this.open=!this.open;
  }
}
