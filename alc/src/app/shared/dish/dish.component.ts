import { Component, Input, OnInit } from '@angular/core';
import { Idish } from 'src/app/models/dish';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {

  @Input() dish!: Idish;

  modalSwitch!: boolean;

  infoDish:any = {};

  constructor(private switchModal:MenuService) { }

  ngOnInit(): void {
    this.switchModal.$modal.subscribe((value)=>{this.modalSwitch = value})
  }

  openModal(id:any){
    this.modalSwitch = true;
    this.switchModal.infoDish(id).subscribe((resp)=>{
      this.infoDish = resp;
      console.log(this.infoDish);
      
    })
  }
}
