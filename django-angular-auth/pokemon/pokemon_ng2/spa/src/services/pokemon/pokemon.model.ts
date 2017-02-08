/**
 * Created by yarivkatz on 08/02/2017.
 */

export class Pokemon{
    public name : string = '';
    public strength : number = 0;
    public description : string = '';

    constructor(json){
        this.name = json.name;
        this.strength = json.strength;
        this.description = json.description;
    }
}