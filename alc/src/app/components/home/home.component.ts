import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filterMenu:any = '';

  public veganMenu:any;

  public beefMenu:any;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.veganMenu().subscribe((resp:any)=>{
      this.veganMenu = resp.results;
    })

    this.menuService.beefMenu().subscribe((resp:any)=> {
      this.beefMenu = resp.results
    })

    let words:any = {};
        
    words.toCapitalizeWords = function(text: string){
        return text.replace(/\w\S*/g, function(txt: any){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    words.inputKeyUp = function(e: any){
        let value = e.target.value;
        e.target.value = words.toCapitalizeWords(value);
    }

    words.inputKeyUpDirect = function(input: any){
        input.value = words.toCapitalizeWords(input.value);
    }

    let inputsToCapitalizeWordsCollection = document.getElementsByClassName("capitalizeWords");

    for (let i = 0; i < inputsToCapitalizeWordsCollection.length; i++) {
        const element = inputsToCapitalizeWordsCollection[i];
        element.addEventListener("keyup", words.inputKeyUp);
    }
  }


}
