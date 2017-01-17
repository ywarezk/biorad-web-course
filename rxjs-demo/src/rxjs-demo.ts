/**
 * Created by yarivkatz on 17/01/2017.
 */

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Subject} from "rxjs";


// const promise = new Promise((resolve, reject) => {
//
//     setTimeout(() => {
//         console.log('Im the set timeout from promise');
//         resolve('hello from promise');
//     }, 2000)
//
// });
//
// promise.then((message) => {
//     console.log(message);
// });

// const observable : Observable<string> = Observable.create((observer) => {
//     setTimeout(() => {
//         console.log('Im the set timeout from obesrvable');
//         observer.next('hello from observable')
//     }, 2000);
// });
//
//
// const observable2 : Observable<number> = observable.map((message) => {
//     return message.length;
// });
//
// observable2.subscribe((strLength : number) => {
//     console.log(`the string length is: ${strLength}`);
// });

const clients = [];

const subject = new Subject();

subject.subscribe((message) => {
    console.log('1');
    clients.push(message);
});

subject.subscribe((message) => {
    console.log('2');
    console.log(message);
})

subject.subscribe((message) => {
    console.log('3');
    console.log(message);
});

subject.next('client1');
subject.next('client2');
subject.next('client3');















