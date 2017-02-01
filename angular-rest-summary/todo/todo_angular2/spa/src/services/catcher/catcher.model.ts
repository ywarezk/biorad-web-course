import {Pokemon} from "../pokemon/pokemon.model";
/**
 * Created by yarivkatz on 01/02/2017.
 */


export class PokemonCatcher{
    public firstName : string = '';
    public lastName : string = '';
    public pokemons : Pokemon[] = [];

    constructor(json ){
        this.firstName = json.first_name || '';
        this.lastName = json.last_name || '';
        this.pokemons = json.pokemons || [];
    }

}