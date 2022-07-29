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

  addOrder(score:any, price:any, time:any, title:any){
    console.log(this.infoDish.vegan);
    
    this.saveOrderService.orderArray.push(new infoDish(score, price, time, title));
    this.saveOrderService.SetTotalOrder();
    this.saveOrderService.setTimeToCook();
    this.saveOrderService.setScore();
    
    this.closeModal()

  }


  closeModal(){
    this.switchModal.$modal.emit(false)
  }

}
