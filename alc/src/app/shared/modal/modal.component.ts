import { Component, Input, OnInit } from '@angular/core';
import { infoDish } from 'src/app/models/infoDish';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() infoDish!: infoDish;

  constructor(private switchModal:MenuService) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.switchModal.$modal.emit(false)
  }

}
