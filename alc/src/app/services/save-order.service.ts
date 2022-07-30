import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveOrderService {

  orderArray: any = []

  score:any= 0;

  total:any= 0;

  time:any = 0;

  SetTotalOrder() {
    this.total = 0;
    if (this.orderArray.length > 0) {
      this.orderArray.forEach((item: { pricePerServing: string; }) => {
        this.total = this.total + Number(item.pricePerServing);
      });
    };
    return this.total.toFixed(2)
  }

  setScore(){
    this.score = 0;
    if (this.orderArray.length > 0){
      this.orderArray.forEach((item: {healthScore:string}) => {
        this.score = this.score + Number(item.healthScore);
      })
    }
    return this.score
  }

  setTimeToCook(){
    this.time = 0;
    if(this.orderArray.length > 0){
      this.orderArray.forEach((item: {readyInMinutes:string}) => {
        this.time = this.time + Number(item.readyInMinutes);
      })
    }
    return this.time
  }

  constructor() { }
}
