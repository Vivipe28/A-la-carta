import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public menuArray:any;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.veganMenu().subscribe((resp:any)=>{
      this.menuArray = resp.results;
      console.log(this.menuArray);
    })
  }


}
