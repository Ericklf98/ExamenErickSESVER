import { Component, OnInit ,Input} from '@angular/core';
@Component({
  selector: 'app-erick-card',
  templateUrl: './erick-card.component.html',
  styleUrls: ['./erick-card.component.css']
})
export class ErickCardComponent implements OnInit {
  public open:boolean=false;
  @Input() nombre = '';
  @Input() precio = '';
  @Input() rating = 0;
  @Input() brand = '';
  @Input() category = '';
  @Input() description = '';
  @Input() product_type = '';
  @Input() colors= [];
  @Input() imagen = '../../../../assets/imagenes/imagenes/nodisponible.jpg';
  constructor() { }
  onMostrar():boolean{
    return this.open=!this.open;
  }
  ngOnInit(): void {
  }

}
