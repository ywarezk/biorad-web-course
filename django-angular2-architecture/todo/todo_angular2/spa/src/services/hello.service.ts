/**
 * hello service class
 */

export class HelloService{

    private _greetings : string[] = []

    addGreeting(greeting : string) : void{
        this._greetings.push(greeting);
    }

    getGreetings() : string[] {
        return this._greetings;
    }

}
