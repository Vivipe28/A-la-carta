import { Component, Input, OnInit } from '@angular/core';
import { SaveOrderService } from 'src/app/services/save-order.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  total: any = 0;

  average: any = 0;

  time: any = 0;

  constructor(private saveOrderService: SaveOrderService) { }

  listOrders = this.saveOrderService.orderArray;

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.setTotal()
    this.setAverage()
    this.setTime()
  }

  setTotal() {
    return this.total = this.saveOrderService.SetTotalOrder()
  }

  setAverage() {
    return this.average = this.saveOrderService.setScore() / this.listOrders.length
  }

  setTime() {
    return this.time = this.saveOrderService.setTimeToCook() / this.listOrders.length
  }

  delete(dish: any) {
    Swal.fire({
      title: 'Estas seguro de esta acción?',
      text: "No podrás revertirla!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!'
    }).then((result) => {
      if (result.isConfirmed) {
        let i = this.listOrders.indexOf(dish)
        if (i !== -1) {
          this.listOrders.splice(i, 1)
        } Swal.fire(
          'Listo!',
          'Tu orden ha sido eliminada!',
          'success'
        )
      }
    })

  }


}
