export class infoDish {
    healthScore!: number;
    pricePerServing!: number;
    readyInMinutes!: number;
    title!: string;
    image!:string;
    vegan!:boolean;

    constructor(healthScore:any, pricePerServing:number, readyInMinutes:number, title:string, vegan:boolean){
        this.healthScore = healthScore;
        this.pricePerServing = pricePerServing;
        this.readyInMinutes = readyInMinutes;
        this.title = title;
        this.vegan = vegan;
    }
}