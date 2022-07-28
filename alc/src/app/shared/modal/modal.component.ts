import { Component, Input, OnInit } from '@angular/core';
import { infoDish } from 'src/app/models/infoDish';
import { MenuService } from 'src/app/services/menu.service';
import { SaveOrderService } from 'src/app/services/save-order.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() infoDish!: infoDish;

  constructor(private switchModal:MenuService, private saveOrderService: SaveOrderService) { }

  ngOnInit(): void {
  
  }

  addOrder(title:any, price:any, score:any, time: any){

    this.saveOrderService.orderArray.push(new infoDish(score, price, time, title));
    console.log(this.saveOrderService.orderArray);
    this.closeModal()

  }


  closeModal(){
    this.switchModal.$modal.emit(false)
  }

}
