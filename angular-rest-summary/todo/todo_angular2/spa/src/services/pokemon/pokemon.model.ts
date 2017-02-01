/**
 * Created by yarivkatz on 17/01/2017.
 */

export class Pokemon{
    public name : string = '';
    public strength : number = 0;
    public dateAdded : Date = new Date();

    constructor(pokemonJson){
        this.name = pokemonJson.name || '';
        this.strength= pokemonJson.strength|| 0;
        try{
            this.dateAdded= new Date(pokemonJson.date_added);
        }
        catch(e) {
            this.dateAdded = new Date();
        }
    }
}