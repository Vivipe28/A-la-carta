export class infoDish {
    healthScore!: number;
    pricePerServing!: number;
    readyInMinutes!: number;
    title!: string;
    image!:string;

    constructor(healthScore:any, pricePerServing:number, readyInMinutes:number, title:string){
        this.healthScore = healthScore;
        this.pricePerServing = pricePerServing;
        this.readyInMinutes = readyInMinutes;
        this.title = title
    }
}