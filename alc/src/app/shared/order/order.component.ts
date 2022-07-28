import { Component, Input, OnInit } from '@angular/core';
import { infoDish } from 'src/app/models/infoDish';
import { SaveOrderService } from 'src/app/services/save-order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private saveOrderService : SaveOrderService) { }

  listOrders = this.saveOrderService.orderArray; 

  ngOnInit(): void {
  }

}
